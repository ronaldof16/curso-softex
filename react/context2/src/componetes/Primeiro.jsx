//import { useContext } from "react";
//import { TitleColorContext } from "../context/TitleColorContext";

import { useTitleContext } from "../hooks/useTitleContext";
import { usePagina2Context } from "../hooks/usePagina2Context"

const Primeiro = () => {
    const {color, setColor} = useTitleContext();
    const [state, dispatch] = usePagina2Context();

  return (
    <div>
        <h2 style={{color: color}}>Primeiro</h2>
        <p>Este é o primeiro componente</p>
        <button onClick={() => setColor("blue")}>Azul</button>
        <button onClick={() => setColor("green")}>verde</button>
        <div>
            <button onClick={() => dispatch({ type: "TWO" })}>Ir para o Segundo</button>
        </div>
    </div>
  )
}

export default Primeiro