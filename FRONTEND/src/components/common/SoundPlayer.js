import React from "react";

const SoundPlayer = ({
  id,
  delay,
  src,
  soundtimer,
  setSoundtimer,
  current
}) => {
  return (
    <audio
      muted
      style={{ display: "none" }}
      controls="controls"
      id={`audio${id}`}
    >
      <source src={src} type="audio/mp3" />>
    </audio>
  );
};

export default SoundPlayer;
