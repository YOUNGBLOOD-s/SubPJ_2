import React from 'react';

const SoundPlayer = ({ delay, src, soundtimer, setSoundtimer }) => {
  return (
    <audio
      muted
      style={{ display: 'none' }}
      controls="controls"
      onLoadedData={e => {
        const audioPlayer = e.target;
        const timer = setTimeout(() => {
          audioPlayer.play();
          audioPlayer.muted = null;
        }, delay);
        let data = soundtimer.concat(timer);
        setSoundtimer(data);
      }}
    >
      <source src={src} type="audio/mp3" />>
    </audio>
  );
};

export default SoundPlayer;
