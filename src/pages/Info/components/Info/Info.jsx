import { useHistory } from 'react-router-dom';
import './Info.css';

const Info = ({ _id, name, last_name, email, username, document }) => {
  const history = useHistory();
  return (
    <div className="info-container">
      <div className="info-header">
        <div className="info-header-name">
          <div className="info-header-title">{name}</div>
          <div className="info-header-subtitle">{last_name}</div>
        </div>
        <button className="info-header-cta" onClick={() => history.push(`/editemployee/${_id}`)}>
          Editar
        </button>
      </div>
      <div className="info-body">
        <p className="info-body-description">{email}</p>
        <p className="info-body-description">{username}</p>
        <p className="info-body-description">{document}</p>
      </div>
    </div>
  );
};

export default Info;
