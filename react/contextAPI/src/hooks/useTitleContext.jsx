import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleContext = () => {
    const context = useContext(TitleColorContext)

    if(!context) {
        console.log("contexto não existe");
        return;
    }

    return context;
}
