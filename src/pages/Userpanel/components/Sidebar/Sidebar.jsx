import { Link } from 'react-router-dom';
import './Sidebar.css';

const SideBar = () => {
  return (
    <aside className="side-bar">
      <div className="side-bar-header">
        <h1 className="side-bar-title">Pets Garden</h1>
      </div>
      <div className="side-bar-body">
        <Link to="/" className="side-bar-link">
          Cerrar Sesión
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
