import React from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import Error from '../../components/Error/Error';
import PanelSection from '../../components/Panelsection/Panelsection';
import Spinner from '../../components/Spinner/Spinner';
import { getAllSchedulesService } from '../../services/Schedule.service';
import { AuthContext } from '../../context/Auth.context';

//.toISOString().replace(/T.*$/, '')

const SchedulePage = () => {
  const [scheduleEvents, setScheduleEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { token } = React.useContext(AuthContext);
  const history = useHistory();

  React.useEffect(() => {
    const getAllSchedules = async () => {
      try {
        const schedules = await getAllSchedulesService(token);
        const formatSchedules = schedules.map(schedule => ({
          title: schedule.serviceName,
          start: new Date(schedule.startDate),
          end: new Date(schedule.finishDate),
          extendedProps: { petId: schedule.idPet, status: schedule.status, news: schedule.news, cost: schedule.cost },
        }));
        console.log(formatSchedules);
        setScheduleEvents(formatSchedules);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getAllSchedules();
  }, [token]);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {error ? (
            <Error
              title="Lo sentimos, ha ocurrido un problema"
              message="No ha sido posible cargar la información de los agendamientos"
            />
          ) : (
            <React.Fragment>
              <PanelSection
                panelTitle="Agendamientos"
                panelButton="Nuevo Agendamiento"
                panelAction={() => history.push('/newschedule')}
              />
              <Calendar events={scheduleEvents} />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default SchedulePage;
