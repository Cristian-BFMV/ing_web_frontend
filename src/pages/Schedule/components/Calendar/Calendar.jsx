import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './Calendar.css';

// eventDrop={this.handleEventDrop}
//       eventClick={this.handleEventClick}
// events={this.formatEvents()}

const Calendar = ({ events }) => {
  const handleEventClick = ({ event }) => {
    console.log(event.extendedProps);
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        events={events}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default Calendar;
