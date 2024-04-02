import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";
import { usePagina2Context } from "../hooks/usePagina2Context";

const Terceiro = () => {
    const {color} = useContext(TitleColorContext);
    const [state, dispatch] = usePagina2Context();

  return (
    <div>
        <h2 style={{color: color}}>Terceiro</h2>
        <p>Este é o terceiro componente</p>
        <button onClick={() => dispatch({type: "ONE"})}>Voltar para o Ínicio</button>
    </div>
  )
}

export default Terceiro