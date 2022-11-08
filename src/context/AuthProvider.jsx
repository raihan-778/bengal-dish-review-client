import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  //firebase login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //firebase signup
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //google signup

  const googleSignUp = (provider) => {
    return signInWithPopup(auth, provider);
  };

  //log out
 const logout=()=>{
  return signOut(auth);
 }
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser.email) {
        setUser(currentUser);
      }
    });
    return () => {
      unsubscribed();
    };
  }, []);

  const authInfo = { user, loading, logout, login, googleSignUp, signUp };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
