import { createContext } from 'react';
import { useUser } from '../hooks/useUser';

export const UserContext = createContext({ name: 'ian' });

export const UseContextProvider = ({ children }) => {
  const [user, setUser] = useUser();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
