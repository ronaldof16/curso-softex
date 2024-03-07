//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext"

const ChangeCounter = () => {
    const {counter, setCounter} = useCounterContext();

  return (
    <div>
        <button onClick={() => setCounter(counter + 2)}>Incrementar</button>
    </div>
  )
}

export default ChangeCounter