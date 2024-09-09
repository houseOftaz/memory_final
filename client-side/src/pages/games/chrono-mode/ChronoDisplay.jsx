import { useState, useEffect } from "react";
import ChronoModeGame from "./ChronoModeGame";
import ChooseChronoForm from "./ChooseChronoForm";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ChronoModeGame from "./ChronoModeGame";
import ChooseChronoForm from "./ChooseChronoForm";
import useChronoBackgdMusic from "../../../components/useChronoBackgdMusic";
import { SessionContext } from "../../../context/SessionContextProvider";

const ChronoDisplay = () => {
  const [displayChooseChronoForm, setDisplayChooseChronoForm] = useState(true);
  const [formValue, setFormValue] = useState(null);
  const [theme, setTheme] = useState("");
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [selectedLevel, setSelectedLevel] = useState("easy");

  const { session } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (session && session.user && session.user.role !== "admin") {
      navigate("/");
    }
  }, [session, navigate]);

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

  if (!session) {
    return <p>Loading ...</p>;
  }

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
