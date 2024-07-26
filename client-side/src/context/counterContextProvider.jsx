import { createContext } from "react";
import useCompteur from "./useCounter";

export const CounterContext = createContext({
  count: 0, // user, email, lastname, firstname
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

function CounterContextProvider(props) {
  const { count, increment, decrement, reset } = useCompteur();
  // useEffect fetch/me

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default CounterContextProvider;
