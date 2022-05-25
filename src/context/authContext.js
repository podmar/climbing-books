import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
// space for the context provider: state and function
    return (
        <AuthContext.Provider
        value={}
        >
            {props.children}
        </AuthContext.Provider>
    );
};