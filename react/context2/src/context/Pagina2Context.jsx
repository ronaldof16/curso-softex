import { createContext, useReducer } from "react";

const stages = ["ONE", "TWO", "THREE"];

    const initialState = {
        gameState: stages[0],
    }

const Pagina2Reducer = (state, action) => {

    switch(action.type) {
        case "TWO":
            return {
                ...state,
                gameState: stages[1]
            }

        case "THREE":
            return {
                ...state,
                gameState: stages[2]
            }

        case "ONE":
            return initialState;

        default:
            return state;
    }

}

export const Pagina2Context = createContext();

export const Pagina2Provider = ({children}) => {
    const value = useReducer(Pagina2Reducer, initialState);

    return (
        <Pagina2Context.Provider value={value}>
            {children}
        </Pagina2Context.Provider>
    )
} 
