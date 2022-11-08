import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  //firebase login
  const login = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //google signup

  const register = () => {};

  const authInfo = { user, loading, login };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
