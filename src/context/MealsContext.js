import {createContext, useReducer} from "react";
import {MealsReducer} from "../reducer/MealsReducer";

const initMeals = {
    category_description: "",
}

export const MealsContext = createContext();
export function MealsContextProvider({children}) {
    const [value, dispatch] = useReducer(MealsReducer, initMeals);
    const setDescription = (descr)=>{
        dispatch({type: "SET_CATEGORY_DESC", payload: {descr}})
    }
    value.resetDesription = ()=>{
        dispatch({type: "SET_CATEGORY_DESC", payload: {descr:""}})
    }

    const values = {
        ...value,
        setDescription
    }
    return <MealsContext.Provider value={values}>
        {children}
    </MealsContext.Provider>
}