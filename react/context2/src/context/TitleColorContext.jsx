import { createContext, useState } from "react";

export const TitleColorContext = createContext();

export const TitleColorProvider = ({children}) => {
    const [color, setColor] = useState("red")

    return (
        <TitleColorContext.Provider value={{color, setColor}}>
            {children}
        </TitleColorContext.Provider>
    )
}
