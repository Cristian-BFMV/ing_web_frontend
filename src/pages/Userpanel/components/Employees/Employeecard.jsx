const EmployeeCard = () => {
  return (
    <div className="employee-card">
      <div className="employee-card-header">
        <p className="employee-card-role">Profesor de guarderia</p>
        <h3 className="employee-card-name">Duvan Arley Cano</h3>
      </div>
      <div className="employee-card-body">
        <p className="employee-card-description">darley.cano@udea.edu.co</p>
        <p className="employee-card-description">daerley</p>
        <p className="employee-card-description">+57 3148956321</p>
      </div>
      <div className="employee-card-footer">
        <button className="employee-card-button employee-card-edit">Editar</button>
        <button className="employee-card-button employee-card-delete">Eliminar</button>
      </div>
    </div>
  );
};

export default EmployeeCard;
