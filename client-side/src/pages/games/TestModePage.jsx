import { useState } from "react";
import TestModeGame from "./TestModeGame";
import ChooseNbrCardForm from "../../components/popups/ChooseNbrCardForm";

function TestModePage() {
  const [displayChooseNbrCardForm, setDisplayChooseNbrCardForm] =
    useState(true);
  const [nbrCards, setNbrCards] = useState(0);
  const [theme, setTheme] = useState(null);
  const [isThemeSelectorVisible, setIsThemeSelectorVisible] = useState(false);

  const onStart = (num, selectedTheme) => {
    setDisplayChooseNbrCardForm(false);
    setNbrCards(num);
    if (isThemeSelectorVisible) {
      setTheme(selectedTheme);
    }
  };

  return (
    <>
      {displayChooseNbrCardForm && (
        <ChooseNbrCardForm
          onStart={onStart}
          showThemeSelector={isThemeSelectorVisible}
        />
      )}
      {!displayChooseNbrCardForm && (
        <TestModeGame
          nbrCards={nbrCards}
          theme={theme}
          setDisplayChooseNbrCardForm={setDisplayChooseNbrCardForm}
        />
      )}
    </>
  );
}

export default TestModePage;
