import { Request, Response } from 'express';
import DownloadAudio from '../services/DownloadAudioFromVideo';
import fs from 'fs';
import path from 'path';

const videoController = {
    async convertSound(req: Request, res: Response){
        const { url } = req.body;

        const audioVideoInfomation = await DownloadAudio(url);

        if(audioVideoInfomation){
            res.send(audioVideoInfomation);
        }else{
            res.status(500).send('Error -> Something Happened');
        }

        setTimeout(() => {
            fs.unlinkSync(path.join(__dirname,"..","..",'download', 'ready', `${audioVideoInfomation.downloadFileName}.mp3`));
        }, 5 * 60 * 1000)
    },
    async downloadSound(req: Request, res: Response){

        const { fileName } = req.query;
        const file = path.join(__dirname,"..","..",'download', 'ready', `${fileName}.mp3`);

        if(file){
            res.download(file, (err) => {
                if(err){
                    console.log(err);
                }
                fs.unlinkSync(file);
            });
        }else{
            res.status(404).send('Erro in Converted File..');
        }
        
    }
}

export default videoController;
