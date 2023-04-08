import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";
import odontoApi from "../api/odontoApi";

export const GlobalContext = createContext(undefined);

export const ContextProvider = ({ children }) => {

    const [dentists, setdentists] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const themeName = state.theme ? 'dark' : 'light';
        localStorage.setItem('theme', themeName);
        document.documentElement.setAttribute('data-base-theme', themeName)
    }, [state.theme])

    useEffect(() => {
        odontoApi.get()
        .then((response ) => setdentists(response.data))
        .catch(e => console.log(e));
    }, []);


    return (
        <GlobalContext.Provider value={{ state, dispatch, dentists }}>
            { children }
        </GlobalContext.Provider>
    );
};