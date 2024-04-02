import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";
import { usePagina2Context } from "../hooks/usePagina2Context";

const Segundo = () => {
    const {color} = useContext(TitleColorContext);
    const [state, dispatch] = usePagina2Context();

  return (
    <div>
        <h2 style={{color: color}}>Segundo</h2>
        <p>Este é o segundo componente</p>
        <button onClick={() => dispatch({type: "THREE"})}>Ir para o Terceiro</button>
    </div>
  )
}

export default Segundo