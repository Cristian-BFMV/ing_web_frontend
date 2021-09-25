import { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext({
  token: '',
  updateToken: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const updateToken = useCallback(token => {
    setToken(token);
  }, []);

  return <AuthContext.Provider value={{ token, updateToken }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
