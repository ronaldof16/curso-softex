//import { useContext } from "react";
//import { TitleColorContext } from "../context/TitleColorContext";

import { useTitleContext } from "../hooks/useTitleContext";

const Primeiro = () => {
    const {color, setColor} = useTitleContext();

  return (
    <div>
        <h2 style={{color: color}}>Primeiro</h2>
        <p>Este é o primeiro componente</p>
        <button onClick={() => setColor("blue")}>Azul</button>
        <button onClick={() => setColor("green")}>verde</button>
    </div>
  )
}

export default Primeiro