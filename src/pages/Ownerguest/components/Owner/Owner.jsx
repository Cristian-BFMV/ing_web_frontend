import Pet from '../Pet/Pet';
import './Owner.css';

const Owner = ({ name, pets, token }) => {
  return (
    <div className="guest-owner">
      <h1 className="guest-owner-title">{`¡Hola ${name}!`}</h1>
      <p className="guest-owner-description">Estas son tus mascotas registradas</p>
      <div className="guest-owner-list">
        {pets.map(pet => (
          <Pet key={pet} pet_id={pet} token={token} />
        ))}
      </div>
    </div>
  );
};

export default Owner;
