import { useState } from "react";
import ThemesModeGame from "./ThemesModeGame";
import ChooseThemeForm from "./ChooseThemeForm";

const ThemesDiplay = () => {
  const [displayChooseThemeForm, setDisplayChooseThemeForm] = useState(true);
  const [theme, setTheme] = useState(null);

  const onStart = (num, theme) => {
    setDisplayChooseThemeForm(false);
    setTheme(num, theme);
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
            themeValue={theme}
          />
        </div>
      )}
    </>
  );
};

export default ThemesDiplay;
