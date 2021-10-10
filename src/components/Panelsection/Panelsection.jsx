import './Panelsection.css';

const PanelSection = ({ panelTitle, panelButton, panelAction }) => {
  return (
    <div className="panel-section-container">
      <div className="panel-section-header">
        <h2 className="panel-section-title">{panelTitle}</h2>
        <button className="panel-section-cta" onClick={panelAction}>
          {panelButton}
        </button>
      </div>
    </div>
  );
};

export default PanelSection;
