
import { useState } from "react";

// custom hook
function useCompteur() {

    const [count, setCount] = useState(0);


    const increment = () => {
        setCount(previousValue => previousValue + 1);
    }

    const decrement = () => {
        setCount(previousValue => previousValue - 1);
    }

    const reset = () => {
        setCount(0);
    }

  return {count, increment, decrement, reset};
}

export default useCompteur;
