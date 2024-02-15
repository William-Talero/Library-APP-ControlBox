import React, { createContext, useState, useEffect, useContext } from "react";
import { IUser } from "../interfaces/user.interface";

// Interfaz y creación del contexto
interface AuthContextProps {
  isAuthenticated: boolean;
  user: IUser | null;
  login: (user: IUser) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// Proveedor de autenticación
export const AuthProvider: React.FC<{
  children: React.ReactNode;
  authData?: { isAuthenticated: boolean; user: IUser | null };
}> = ({ children, authData }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    authData?.isAuthenticated ?? false
  );
  const [user, setUser] = useState(authData?.user ?? null);

  // Efecto para obtener datos de localStorage (solo en el cliente)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedIsAuthenticated =
        localStorage.getItem("isAuthenticated") === "true";
      const storedUserJSON = localStorage.getItem("user");
      const storedUser = storedUserJSON ? JSON.parse(storedUserJSON) : null;

      setIsAuthenticated(storedIsAuthenticated);
      setUser(storedUser);
    }
  }, []);

  // Funciones de login y logout
  const login = (userData: IUser) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
  };

  // Envoltura del contexto
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para consumir el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};
