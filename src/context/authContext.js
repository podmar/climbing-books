import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config.js"
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const redirectTo = useNavigate();

    const register = async (email, password) => {
        console.log("email + password", email, password)

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            setUser(userCredential.user.email);
            console.log(userCredential)
            redirectTo("myrack")
        } catch (error) {
            console.log(error)
            setUser(null)
            }
        }

    const login = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user)
                setUser(userCredential.user.email)
                redirectTo("myrack")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setUser(null)
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <AuthContext.Provider
        value={ {user, setUser, register, login} }
        >
            {props.children}
        </AuthContext.Provider>
    );
};