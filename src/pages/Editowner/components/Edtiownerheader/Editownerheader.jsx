import { Link } from 'react-router-dom';
import './Editownerheader.css';

const EditOwnerHeader = () => {
  return (
    <div className="editowner-header-routing-container">
      <Link to="/home/owners" className="editowner-header-routing">{`< Atrás`}</Link>
    </div>
  );
};

export default EditOwnerHeader;
