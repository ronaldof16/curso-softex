//import { useContext } from "react";
//import { ParaColorContext } from "../context/ParaColorContext";
//import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext"
import {useTitleContext} from "../hooks/useTitleContext"
import { useParaContext } from "../hooks/useParaContext"

const Contact = () => {
  const {counter} = useCounterContext()
  const {color} = useTitleContext()
  const {cor, dispatch} = useParaContext()

  return (
    <div>
        <h1 style={{color: color}}>Página de contato</h1>
        <p style={{color: cor}}>Valor do counter: {counter}</p>
        <button onClick={() => dispatch({type: "YELLOW"})}>Parágrafo Amarelo</button>
        <button onClick={() => dispatch({type: "GREEN"})}>Parágrafo Verde</button>
    </div>
  )
}

export default Contact