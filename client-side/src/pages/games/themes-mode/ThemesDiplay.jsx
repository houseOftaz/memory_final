import { useState } from "react";
import ThemesModeGame from "./ThemesModeGame";
import ChooseThemeForm from "./ChooseThemeForm";
import ThemesBackgdMusic from "../../../components/ThemesBackgdMusic";

const ThemesDiplay = () => {
  const [displayChooseThemeForm, setDisplayChooseThemeForm] = useState(true);
  const [formValue, setFormValue] = useState(null);

  const onStart = (formValue) => {
    setDisplayChooseThemeForm(false);
    setFormValue(formValue);
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
          <ThemesBackgdMusic themeValue={formValue.theme} />
          <ThemesModeGame
            nbrCards={formValue.nbrCards}
            setDisplayChooseThemeForm={setDisplayChooseThemeForm}
            themeValue={formValue.theme}
          />
        </div>
      )}
    </>
  );
};

export default ThemesDiplay;
