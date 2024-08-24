import { useEffect } from "react";

const ChronoBackgdMusic = () => {
  useEffect(() => {
    const audio = new Audio("/sounds/epic.wav");

    const playAudio = async () => {
      audio.loop = true;
      audio.volume = 0.5;
      audio.play().catch((error) => {
        console.error(error);
      });
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null;
};

export default ChronoBackgdMusic;
