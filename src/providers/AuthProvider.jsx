import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

//create context
export const AuthContext=createContext(null)
 
//firebase auth

const auth = getAuth(app);

// google auth
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null)

    const signUp=(email, password)=>{
       
       return createUserWithEmailAndPassword(auth, email, password)

    }

    const logIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    //auth state maintain

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged (auth, currentUser =>{
            setUser(currentUser)
        });

        return ()=>{
            unsubscribe()
        }
    },[])

    //signout

    const logout=()=>{
        return signOut(auth)
    }

    const authInfo={
        user,
        signUp,
        logIn,
        googleLogin,
        logout,
    }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;