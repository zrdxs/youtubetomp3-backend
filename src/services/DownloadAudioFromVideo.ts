import fs from "fs";
import path from "path";
import ytdl from "ytdl-core";
import GenerateRandomCode from '../utils/RandomCode';
import { VideoInfo } from '../common/Interface';
import { FormatSongName } from '../utils/FormatSongName';
import { GetFileSize } from '../utils/GetFileSize';
import FormatAudioDuration from '../utils/FormatAudioDuration';

const DownloadAudio = async (url: string) => {
  const videoData = await ytdl.getInfo(url);
  const uniqueCode = GenerateRandomCode(5);
  const formatedSongName = FormatSongName(videoData.videoDetails.title)

  const videoInfo: VideoInfo = {
    name: formatedSongName,
    thumbnail: String(videoData.videoDetails.thumbnail.thumbnails[3].url),
    time_length: FormatAudioDuration(videoData.videoDetails.lengthSeconds),
    format: "MP3",
    downloadFileName: '',
    file_size: ''
  };

  const download_path = path.join(__dirname, "..","..","download", "ready");
  
  try{
    ytdl(url).pipe(fs.createWriteStream(`${download_path}/${videoInfo.name}${uniqueCode}.mp3`));
  }catch(err){
    console.log(err);
  }

  let fileSizeInMB = GetFileSize(`${videoInfo.name}${uniqueCode}.mp3`) / 1000000.0

  videoInfo.file_size = String(fileSizeInMB)
  videoInfo.downloadFileName = `${videoInfo.name}${uniqueCode}`;

  return videoInfo;
};

export default DownloadAudio;