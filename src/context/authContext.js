import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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
            // setUser(userCredential.user.email);
            setUser(userCredential.user);
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
                // setUser(userCredential.user.email)
                setUser(userCredential.user)
                redirectTo("myrack")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setUser(null)
                console.log(errorCode, errorMessage);
            });
    };

    const checkIfUserLoggedin = () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                setUser(user);
            } else {
                setUser(null);
            }
        });
    };

    useEffect(() => {
      checkIfUserLoggedin();
    }, [])
    

    return (
        <AuthContext.Provider
        value={ {user, setUser, register, login} }
        >
            {props.children}
        </AuthContext.Provider>
    );
};