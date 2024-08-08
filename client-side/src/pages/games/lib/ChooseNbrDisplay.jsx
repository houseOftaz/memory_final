import { useState } from "react";
import TestModeGame from "../TestModeGame";
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
      {displayChooseNbrCardForm && (
        <div>
          <ChooseNbrCardForm onStart={onStart} />
        </div>
      )}
      {!displayChooseNbrCardForm && (
        <div>
          <TestModeGame
            nbrCards={nbrCards}
            setDisplayChooseNbrCardForm={setDisplayChooseNbrCardForm}
          />
        </div>
      )}
    </>
  );
};

export default ChooseNbrDisplay;
