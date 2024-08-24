import { useEffect } from "react";

const useChronoBackgdMusic = (playbackRate = 1, shouldPlay) => {
  useEffect(() => {
    const audio = new Audio("/sounds/epic.wav");

    const playAudio = async () => {
      audio.loop = true;
      audio.volume = 0.5;
      audio.playbackRate = playbackRate;

      audio.play().catch((error) => {
        console.error(error);
      });
    };

    if (shouldPlay) {
      playAudio();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [playbackRate, shouldPlay]);

  return null;
};

export default useChronoBackgdMusic;
