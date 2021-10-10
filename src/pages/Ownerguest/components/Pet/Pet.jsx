import React from 'react';
import Card from '../../../../components/Card/Card';
import Error from '../../../../components/Error/Error';
import Spinner from '../../../../components/Spinner/Spinner';
import { getPetByIdService } from '../../../../services/Pets.service';

const Pet = ({ pet_id, token }) => {
  const [pet, setPet] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const getPetById = async () => {
      try {
        const pet = await getPetByIdService(pet_id, token);
        setPet(pet);
        console.log(pet);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getPetById();
  }, [pet_id, token]);

  return (
    <Card>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {error ? (
            <Error title="Lo sentimos, ha ocurrido un problema" />
          ) : (
            <div className="card">
              <div className="card-header">
                <h3 className="card-name">{pet.name}</h3>
              </div>
              <div className="card-body">
                <p className="card-description">{pet.breed}</p>
                <p className="card-description">{pet.size}</p>
                <p className="card-description">{pet.age}</p>
                <p className="card-description">{pet.vaccinePlan}</p>
                <p className="card-description">{pet.attendance}</p>
              </div>
            </div>
          )}
        </React.Fragment>
      )}
    </Card>
  );
};

export default Pet;
