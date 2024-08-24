import { useState, useEffect } from "react";
import ChronoModeGame from "./ChronoModeGame";
import ChooseChronoForm from "./ChooseChronoForm";
import useChronoBackgdMusic from "../../../components/useChronoBackgdMusic";

const ChronoDisplay = () => {
  const [displayChooseChronoForm, setDisplayChooseChronoForm] = useState(true);
  const [formValue, setFormValue] = useState(null);
  const [theme, setTheme] = useState("");
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [selectedLevel, setSelectedLevel] = useState("easy");

  useEffect(() => {
    const availableThemes = ["animals", "heros", "monuments"];
    const randomTheme =
      availableThemes[Math.floor(Math.random() * availableThemes.length)];
    setTheme(randomTheme);
  }, []);

  const onStart = (selectedLevel, timeLimit) => {
    setDisplayChooseChronoForm(false);
    setFormValue({ selectedLevel, timeLimit });

    switch (selectedLevel) {
      case "easy":
        setPlaybackRate(1.0);
        break;
      case "medium":
        setPlaybackRate(1.4);
        break;
      case "hard":
        setPlaybackRate(1.9);
        break;
      default:
        setPlaybackRate(1.0);
        break;
    }
  };

  useChronoBackgdMusic(playbackRate, !displayChooseChronoForm);

  return (
    <div className={displayChooseChronoForm ? "" : selectedLevel}>
      {displayChooseChronoForm ? (
        <ChooseChronoForm
          onLevelSelect={onStart}
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
        />
      ) : (
        <>
          <ChronoModeGame
            timeLimit={formValue.timeLimit}
            setDisplayChooseChronoForm={setDisplayChooseChronoForm}
            themeValue={theme}
          />
        </>
      )}
    </div>
  );
};

export default ChronoDisplay;
