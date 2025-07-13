import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(null);
  async function login(email: string, password: string) {}
  async function register(email: string, password: string) {}

  async function logout() {}

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
