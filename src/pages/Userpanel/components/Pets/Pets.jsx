import PetCard from './Petcard';
import './Pets.css';

const Employees = () => {
  return (
    <div className="pets-container">
      <div className="pets-header">
        <h2 className="pets-title">Mascotas</h2>
        <button className="pets-cta">Nueva mascota</button>
      </div>
      <div className="pets-list">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
    </div>
  );
};

export default Employees;
