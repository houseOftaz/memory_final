import { useState } from "react";
import TestModeGame from "./TestModeGame";
import ChooseNbrCardForm from "./ChooseNbrCardForm";

const ChooseNbrDisplay = () => {
  const [displayChooseNbrCardForm, setDisplayChooseNbrCardForm] =
    useState(true);
  const [nbrCards, setNbrCards] = useState(0);

  const onStart = (num) => {
    setDisplayChooseNbrCardForm(false);
    setNbrCards(num);
  };

  return (
    <>
      {displayChooseNbrCardForm && <ChooseNbrCardForm onStart={onStart} />}
      {!displayChooseNbrCardForm && (
        <TestModeGame
          nbrCards={nbrCards}
          setDisplayChooseNbrCardForm={setDisplayChooseNbrCardForm}
        />
      )}
    </>
  );
};

export default ChooseNbrDisplay;
