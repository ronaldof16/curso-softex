import { useContext } from "react";
import { ParaColorContext } from "../context/ParaColorContext";

export const useParaContext = () => {
    const context = useContext(ParaColorContext)

    if(!context) {
        console.log("contexto não existe");
        return;
    }

    return context;
}

