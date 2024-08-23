import { useState, useEffect } from "react";
import ChronoModeGame from "./ChronoModeGame";
import ChooseChronoForm from "./ChooseChronoForm";

const ChronoDisplay = () => {
  const [displayChooseChronoForm, setDisplayChooseChronoForm] = useState(true);
  const [formValue, setFormValue] = useState(null);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const availableThemes = ["animals", "heros", "monuments"];
    const randomTheme =
      availableThemes[Math.floor(Math.random() * availableThemes.length)];
    setTheme(randomTheme);
  }, []);

  const onStart = (selectedLevel, timeLimit) => {
    setDisplayChooseChronoForm(false);
    setFormValue({ selectedLevel, timeLimit });
  };
  return (
    <div>
      {displayChooseChronoForm ? (
        <ChooseChronoForm onLevelSelect={onStart} />
      ) : (
        <ChronoModeGame
          timeLimit={formValue.timeLimit}
          setDisplayChooseChronoForm={setDisplayChooseChronoForm}
          themeValue={theme}
        />
      )}
    </div>
  );
};

export default ChronoDisplay;
