import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

//create context
export const AuthContext=createContext(null)
 
//firebase auth

const auth = getAuth(app);

// google auth
const googleProvider = new GoogleAuthProvider();


// github
const provider = new GithubAuthProvider();



const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null)

    // loader

    const [loading, setLoading]=useState(true)

    const signUp=(email, password)=>{
       
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)

    }

    const logIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //auth state maintain

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged (auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });

        return ()=>{
            unsubscribe();
        }
    },[])

   

    //signout

    const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo={
        user,
        signUp,
        logIn,
        googleLogin,
        logout,
        loading,
        gitHubLogin,
    }

    

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;