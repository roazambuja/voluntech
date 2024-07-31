import React, { createContext, useState, useContext, ReactNode } from "react";
import api from "../services/api";
import { getUser } from "../services/users";

interface AuthContextData {
  user: any;
  login: (token: string) => void;
  //   logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>();

  async function login(token: string) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    const payloadBase64 = token.split(".")[1];
    const payloadJson = atob(payloadBase64);
    let payload = JSON.parse(payloadJson);

    try {
      let { data } = await getUser(payload.user);
      setUser(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
