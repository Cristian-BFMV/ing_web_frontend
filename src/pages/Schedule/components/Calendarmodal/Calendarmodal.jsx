import React from 'react';
import { useHistory } from 'react-router-dom';
import Spinner from '../../../../components/Spinner/Spinner';
import Error from '../../../../components/Error/Error';
import { getPetByIdService } from '../../../../services/Pets.service';
import { AuthContext } from '../../../../context/Auth.context';
import './Calendarmodal.css';

const CalendarModal = ({ petId, serviceName, status, scheduleId }) => {
  const [pet, setPet] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { token } = React.useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    const getPet = async () => {
      try {
        const pet = await getPetByIdService(petId, token);
        setPet(pet);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getPet();
  }, [petId, token]);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {error ? (
            <Error title="Lo sentimos, ha ocurrido un problema" />
          ) : (
            <React.Fragment>
              <div className="calendar-modal-header">
                <h2 className="calendar-modal-title">{serviceName}</h2>
                <p className="calendar-modal-description">{status}</p>
              </div>
              <div className="calendar-modal-body">
                <p className="calendar-modal-description">{pet.name}</p>
                <p className="calendar-modal-description">{pet.breed}</p>
                <p className="calendar-modal-description">{pet.size}</p>
                <p className="calendar-modal-description">{pet.age}</p>
                <p className="calendar-modal-description">{pet.vaccinePlan}</p>
                <p className="calendar-modal-description">{pet.attendance}</p>
              </div>
              <div className="calendar-modal-footer">
                <button className="calendar-modal-button" onClick={() => history.push(`/editschedule/${scheduleId}`)}>
                  Generar novedades
                </button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default CalendarModal;
