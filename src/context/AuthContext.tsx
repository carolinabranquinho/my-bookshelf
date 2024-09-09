import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import { User } from "firebase/auth";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextProps = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  setCurrentUser: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
