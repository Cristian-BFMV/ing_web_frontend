import { Link } from 'react-router-dom';
import './Newownerheader.css';

const NewOwnerHeader = () => {
  return (
    <div className="newowner-header-routing-container">
      <Link to="/home/owners" className="newowner-header-routing">{`< Atrás`}</Link>
    </div>
  );
};

export default NewOwnerHeader;
