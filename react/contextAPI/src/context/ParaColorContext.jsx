import { createContext, useReducer } from "react";

export const ParaColorContext = createContext();

export const paraColorReducer = (state, action) => {
    switch(action.type) {
        case "YELLOW":
            return {
                ...state,
                cor: "yellow"
            }

        case "GREEN":
            return {
                ...state,
                cor: 'green'
            }
        
        default:
            return state;
    }
}

export const ParaColorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(paraColorReducer);

    return (
        <ParaColorContext.Provider value={{ ...state, dispatch }}>
            {children}
        </ParaColorContext.Provider>
    )
}

