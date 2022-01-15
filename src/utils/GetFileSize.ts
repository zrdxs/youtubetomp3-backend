import fs from 'fs'
import path from 'path'

export const GetFileSize = (fileName: string): number =>{

    const fileData = fs.statSync(path.join(__dirname, '..', '..', 'download', 'ready', `${fileName}`))
    
    return fileData.size
}
