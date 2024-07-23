
import { useState } from "react"
import ChooseNbrCardForm from "../../components/popups/ChooseNbrCardForm"
import TestModeGame from "./TestModeGame"


function TestModePage() {

  const [displayChooseNbrCardForm, setDisplayChooseNbrCardForm] = useState(true)
  const [nbrCards, setNbrCards] = useState(0)

  const onStart = (num) => {
    setDisplayChooseNbrCardForm(false)
    setNbrCards(num)
  }

  return (
    <>
      {
        displayChooseNbrCardForm && <ChooseNbrCardForm onStart={onStart} />
      }
      {
        !displayChooseNbrCardForm && <TestModeGame nbrCards={nbrCards}
                                                   setDisplayChooseNbrCardForm={setDisplayChooseNbrCardForm} />
      }
    </>
  )

}

export default TestModePage;
