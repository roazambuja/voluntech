import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import api from "../services/api";
import { getLoggedUser, OrganizationInterface, UserInterface } from "../services/users";

interface AuthContextData {
  user: null | UserInterface | OrganizationInterface;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<null | UserInterface | OrganizationInterface>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      login(token);
    } else {
      setLoading(false);
    }
  }, []);

  async function login(token: string): Promise<string | undefined> {
    setLoading(true);
    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    try {
      let { data } = await getLoggedUser();
      if (!localStorage.getItem("token")) {
        localStorage.setItem("token", token);
      }
      setUser(data.user);
      return data.user._id;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = "";
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
