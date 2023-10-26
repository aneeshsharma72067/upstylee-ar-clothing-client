import { useState, createContext } from "react";
const UserDataContext = createContext();
function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {children}
    </UserDataContext.Provider>
  );
}
export { UserDataContext, UserContextProvider };
