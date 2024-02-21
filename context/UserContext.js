import { useState, createContext } from "react";
const UserDataContext = createContext();
function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <UserDataContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserDataContext.Provider>
  );
}
export { UserDataContext, UserContextProvider };
