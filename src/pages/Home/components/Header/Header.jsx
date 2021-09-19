import { Link } from 'react-router-dom';
import Petsgarden from '../../../../assets/Petsgarden.PNG';
import './Header.css';

const Home = () => {
  return (
    <header className="header-container">
      <div className="header-logo-container">
        <img src={Petsgarden} alt="Pets Garden" className="header-logo" />
      </div>
      <h1 className="header-title">Pets Garden</h1>
      <p className="header-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione quia asperiores voluptates harum ad mollitia
        labore, tempora neque aut architecto.
      </p>
      <div className="cta-login-container">
        <Link to="/login" className="cta-login">
          Iniciar Sesión
        </Link>
        <Link to="/guest" className="cta-login cta-secondary">
          Solicitar acceso
        </Link>
      </div>
    </header>
  );
};

export default Home;
