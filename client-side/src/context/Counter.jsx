
import { useContext } from "react";
import { CounterContext } from "./counterContextProvider";

function Counter() {
    const {count, increment, decrement, reset} = useContext(CounterContext);

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;
