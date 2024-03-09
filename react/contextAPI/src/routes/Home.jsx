//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";


import { useCounterContext } from "../hooks/useCounterContext"
import { useParaContext } from "../hooks/useParaContext"
import {useTitleContext} from "../hooks/useTitleContext"

const Home = () => {
   const {counter} = useCounterContext()
   const {color, dispatch} = useTitleContext()
   const {cor} = useParaContext()

  return (
    <div>
        <h1 style={{color: color}}>Home</h1>
        <p style={{color: cor}}>Valor do Contador: {counter}</p>
        <div>
          <button onClick={() => dispatch( {type: "RED" })}>Vermelho</button>
          <button onClick={() => dispatch( {type: "BLUE" })}>Azul</button>
        </div>
    </div>
  )
}

export default Home