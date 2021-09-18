import { Link } from 'react-router-dom';
import './Guest.css';

const Guest = () => {
  return (
    <div className="guest-routing-container">
      <Link to="/" className="guest-routing">{`< Atrás`}</Link>
    </div>
  );
};

export default Guest;
