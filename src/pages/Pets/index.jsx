import React from 'react';
import * as petService from '../../services/Pets.service';
import PetList from './components/Petlist/Petlist';
import { AuthContext } from '../../context/Auth.context';

const OwnersPage = () => {
  const [pets, setPets] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { token } = React.useContext(AuthContext);

  React.useEffect(() => {
    const getPets = async () => {
      try {
        const pets = await petService.getAllPetsService(token);
        setPets(pets);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getPets();
  }, [token]);

  return <PetList pets={pets} loading={loading} error={error} />;
};

export default OwnersPage;
