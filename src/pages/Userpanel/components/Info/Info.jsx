import './Info.css';

const Info = () => {
  return (
    <div className="info-container">
      <div className="info-header">
        <div className="info-header-name">
          <div className="info-header-title">Mateo</div>
          <div className="info-header-subtitle">Baena Chavarriaga</div>
        </div>
        <button className="info-header-cta">Editar</button>
      </div>
      <div className="info-body">
        <p className="info-body-description">mateo.baena@udea.edu.co</p>
        <p className="info-body-description">mateo.baena</p>
        <p className="info-body-description">+57 3145899632</p>
      </div>
    </div>
  );
};

export default Info;
