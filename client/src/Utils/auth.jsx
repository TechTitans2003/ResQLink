import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const API = `http://127.0.0.1:2024`;

    const contextContent = {
        API,
    }

    return (
        <AuthContext.Provider value={contextContent}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    };
    return authContextValue;
}