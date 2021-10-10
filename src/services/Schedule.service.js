import axios from 'axios';

export const getAllSchedulesService = async token => {
  try {
    const { data } = await axios.get('https://guarded-bayou-27240.herokuapp.com', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar la información sobre los agendamientos');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const createScheduleService = async (schedule, token) => {
  try {
    const { data } = await axios.post('https://guarded-bayou-27240.herokuapp.com', schedule, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No sido posible registar el nuevo agendamiento');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const updateScheduleService = async (schedule, scheduleId, token) => {
  try {
    const { data } = await axios.put(`https://guarded-bayou-27240.herokuapp.com/${scheduleId}`, schedule, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No sido posible actualizar el agendamiento');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};
