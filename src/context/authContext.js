import { createContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config.js"


export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null)
    
    const register = (email, password) => {
        console.log("email + password", email, password)

        //transform into asynch await
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(userCredential)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    };

    return (
        <AuthContext.Provider
        value={ {user, setUser, register} }
        >
            {props.children}
        </AuthContext.Provider>
    );
};