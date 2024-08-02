import { useState } from "react";
import ThemesModeGame from "./ThemesModeGame";
import ChooseThemeForm from "./ChooseThemeForm";
import ChooseNbrCardForm from "./ChooseNbrCardForm";

const ThemesDiplay = () => {
  const [displayChooseThemeForm, setDisplayChooseThemeForm] = useState(true);
  const [theme, setTheme] = useState(null);

  const onStart = (num) => {
    setDisplayChooseThemeForm(false);
    setTheme(num);
  };

  return (
    <>
      {displayChooseThemeForm && (
        <div>
          <ChooseThemeForm onStart={onStart} />
        </div>
      )}
      {!displayChooseThemeForm && (
        <div>
          <ThemesModeGame
            nbrCards={theme}
            setDisplayChooseThemeForm={setDisplayChooseThemeForm}
          />
        </div>
      )}
    </>
  );
};

export default ThemesDiplay;
