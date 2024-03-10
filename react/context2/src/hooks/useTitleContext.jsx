import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleContext = () => {
    const context = useContext(TitleColorContext);
    
    return context;
}


