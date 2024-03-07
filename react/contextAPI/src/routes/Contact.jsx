//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext"
import {useTitleContext} from "../hooks/useTitleContext"

const Contact = () => {
  const {counter} = useCounterContext()
  const {color} = useTitleContext()

  return (
    <div>
        <h1 style={{color: color}}>Página de contato</h1>
        <p>Valor do counter: {counter}</p>
    </div>
  )
}

export default Contact