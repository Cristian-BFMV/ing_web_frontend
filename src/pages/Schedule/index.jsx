import React from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';
import Error from '../../components/Error/Error';
import PanelSection from '../../components/Panelsection/Panelsection';
import Spinner from '../../components/Spinner/Spinner';

const SchedulePage = () => {
  const [scheduleEvents, setScheduleEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const history = useHistory();

  React.useEffect(() => {
    setTimeout(() => {
      setScheduleEvents([
        {
          title: 'Primer evento',
          start: new Date().toISOString().replace(/T.*$/, ''),
          extendedProps: { id: 1, pet: 'Firulais' },
        },
        {
          title: 'Segundo evento',
          start: new Date().toISOString().replace(/T.*$/, '') + 'T12:00:00',
          extendedProps: { id: 2, pet: 'Firulais 2' },
        },
        {
          title: 'Tercer evento',
          start: new Date('2021/10/1').toISOString().replace(/T.*$/, '') + 'T12:00:00',
          extendedProps: { id: 2, pet: 'Firulais 2' },
        },
        {
          title: 'Cuarto evento',
          start: new Date('2021/09/30').toISOString().replace(/T.*$/, '') + 'T12:00:00',
          extendedProps: { id: 2, pet: 'Firulais 2' },
        },
      ]);
      setLoading(false);
      setError(false);
    }, 1000);
  }, []);

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
