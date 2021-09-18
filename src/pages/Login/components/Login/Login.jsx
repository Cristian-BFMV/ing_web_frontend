import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="login-routing-container">
      <Link to="/" className="login-routing">{`< Atrás`}</Link>
    </div>
  );
};

export default Login;
