import { Link } from 'react-router-dom';
import './Formheader.css';

const FormHeader = ({ redirectTo }) => {
  return (
    <div className="form-header-routing-container">
      <Link to={`${redirectTo}`} className="form-header-routing">{`< Atrás`}</Link>
    </div>
  );
};

export default FormHeader;
