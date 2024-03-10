import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

const Segundo = () => {
    const {color} = useContext(TitleColorContext);

  return (
    <div>
        <h2 style={{color: color}}>Segundo</h2>
        <p>Este é o segundo componente</p>
    </div>
  )
}

export default Segundo