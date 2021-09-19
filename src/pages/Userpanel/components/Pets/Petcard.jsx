const PetCard = () => {
  return (
    <div className="pet-card">
      <div className="pet-card-header">
        <h3 className="pet-card-name">Firularias</h3>
      </div>
      <div className="pet-card-body">
        <p className="pet-card-description">Pastor Aleman</p>
        <p className="pet-card-description">2 años</p>
        <p className="pet-card-description">Se recomienda no bañarlo con agua fria</p>
      </div>
      <div className="pet-card-footer">
        <button className="pet-card-button pet-card-edit">Editar</button>
        <button className="pet-card-button pet-card-delete">Eliminar</button>
      </div>
    </div>
  );
};

export default PetCard;
