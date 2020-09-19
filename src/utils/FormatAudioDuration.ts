const FormatAudioDuration = (audioSeconds: string): string => {
   return new Date(Number(audioSeconds) * 1000).toISOString().substr(11, 8)
}

export default FormatAudioDuration;
