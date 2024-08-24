import { useEffect } from "react";

const ThemesBackgdMusic = ({ themeValue }) => {
  useEffect(() => {
    const audioFiles = {
      animals: "sounds/funny-halloween.wav",
      heros: "sounds/action.wav",
      monuments: "sounds/lua-chin-vang-tro-bong-traditional-bamboo-flute.wav",
    };

    const audioSrc = audioFiles[themeValue];

    if (!audioSrc) {
      return;
    }
    const audio = new Audio(audioSrc);

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error(error);
      }
    };
    audio.loop = true;
    audio.volume = 0.5;
    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [themeValue]);

  return null;
};

export default ThemesBackgdMusic;
