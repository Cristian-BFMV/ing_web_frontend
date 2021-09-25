import AuthProvider from './Auth.context';

const ContextProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ContextProvider;
