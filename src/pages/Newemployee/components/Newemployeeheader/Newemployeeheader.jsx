import { Link } from 'react-router-dom';
import './Newemployeeheader.css';

const NewEmployeeHeader = () => {
  return (
    <div className="newemployee-header-routing-container">
      <Link to="/home/employees" className="newemployee-header-routing">{`< Atrás`}</Link>
    </div>
  );
};

export default NewEmployeeHeader;
