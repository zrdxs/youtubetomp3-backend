export const FormatSongName = (songName: String): string =>{
   let newSongName = songName.replace(/(\/)/g,"-")
   newSongName = newSongName.replace(/[\[\]']/g,"")
   return newSongName = newSongName.replace(/[.,]/,"")
}
