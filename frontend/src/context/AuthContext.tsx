import { createContext, useState, useContext, ReactNode } from "react";
import api from "../services/api";

interface AuthContextType {
token: string | null;
login: (email: string, password: string) => Promise<void>;
logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    const login = async (email: string, password: string) => {
    const response = await api.post("/auth/jwt/create/", { email, password });
    const accessToken = response.data.access;
    
    setToken(accessToken);
    localStorage.setItem("token", accessToken);
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

    const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
};

return (
    <AuthContext.Provider value={{ token, login, logout }}>
    {children}
    </AuthContext.Provider>
);
};

export const useAuth = () => useContext(AuthContext);