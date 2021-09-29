import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/Auth.context';
import './Sidebar.css';

const SideBar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <aside className="side-bar">
      <div className="side-bar-header">
        <h1 className="side-bar-title">Pets Garden</h1>
      </div>
      <div className="side-bar-body">
        <Link to="/" className="side-bar-link" onClick={logout}>
          Cerrar Sesión
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
