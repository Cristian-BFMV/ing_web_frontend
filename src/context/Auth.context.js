import { createContext, useCallback, useEffect, useReducer } from 'react';

export const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  role: '',
  id: '',
  login: () => {},
  logout: () => {},
});

const initialState = {
  token: '',
  isLoggedIn: false,
  role: '',
  id: '',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        token: action.payload.token,
        isLoggedIn: true,
        role: action.payload.role,
        id: action.payload.id,
      };
    case 'LOGOUT':
      return {
        token: '',
        isLoggedIn: false,
        role: '',
        id: '',
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [{ token, isLoggedIn, role, id }, dispacth] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const id = localStorage.getItem('id');
    if (token && role && id) dispacth({ type: 'LOGIN', payload: { token, role, id } });
  }, []);

  const login = useCallback(({ token, role, id }) => {
    dispacth({ type: 'LOGIN', payload: { token, role, id } });
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
    localStorage.setItem('id', id);
  }, []);

  const logout = () => {
    dispacth({ type: 'LOGOUT' });
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
  };

  return <AuthContext.Provider value={{ token, isLoggedIn, role, id, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
