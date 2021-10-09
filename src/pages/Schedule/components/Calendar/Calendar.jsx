import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import CalendarModal from '../Calendarmodal/Calendarmodal';
import Modal from '../../../../components/Modal/Modal';
import modalReducer, { initialState } from '../../../../reducers/Modal.reducer';
import './Calendar.css';

// eventDrop={this.handleEventDrop}
//       eventClick={this.handleEventClick}
// events={this.formatEvents()}

const Calendar = ({ events }) => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const [modalState, setModalState] = React.useState({});

  const handleEventClick = ({ event }) => {
    console.log(event.extendedProps);
    setModalState(event.extendedProps);
    dispatch({ type: 'SHOW_MODAL_SUCCESS' });
  };

  const closeModal = React.useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
  }, []);

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        editable={true}
        events={events}
        eventClick={handleEventClick}
      />
      {state.showModal && (
        <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
          <CalendarModal {...modalState} />
        </Modal>
      )}
    </div>
  );
};

export default Calendar;
