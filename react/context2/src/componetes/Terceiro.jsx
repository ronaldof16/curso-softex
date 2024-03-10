import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

const Terceiro = () => {
    const {color} = useContext(TitleColorContext);

  return (
    <div>
        <h2 style={{color: color}}>Terceiro</h2>
        <p>Este é o terceiro componente</p>
    </div>
  )
}

export default Terceiro