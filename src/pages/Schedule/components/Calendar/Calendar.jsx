import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';

// eventDrop={this.handleEventDrop}
//       eventClick={this.handleEventClick}
// events={this.formatEvents()}

const Calendar = ({ events }) => {
  //   const formatEvents = () => {
  //     return [
  //       {
  //         title: 'Primer evento',
  //         start: new Date().toISOString().replace(/T.*$/, ''),
  //         extendedProps: { id: 1, pet: 'Firulais' },
  //       },
  //       {
  //         title: 'Segundo evento',
  //         start: new Date().toISOString().replace(/T.*$/, '') + 'T12:00:00',
  //         extendedProps: { id: 2, pet: 'Firulais 2' },
  //       },
  //       {
  //         title: 'Tercer evento',
  //         start: new Date('2021/10/1').toISOString().replace(/T.*$/, '') + 'T12:00:00',
  //         extendedProps: { id: 2, pet: 'Firulais 2' },
  //       },
  //     ];
  //   };

  const handleEventClick = ({ event }) => {
    console.log(event.extendedProps);
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridWeek"
        editable={true}
        events={events}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default Calendar;
