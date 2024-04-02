import { Pagina2Context } from "../context/Pagina2Context";
import { useContext } from "react";

export const usePagina2Context = () => {
    const context = useContext(Pagina2Context);

    return context;
}
