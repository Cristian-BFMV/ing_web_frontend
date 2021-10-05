import axios from 'axios';

export const getAllPetsService = async token => {
  try {
    const { data } = await axios.get('https://ing-web-mascots.herokuapp.com/api/mascots', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar las mascotas');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const getPetByIdService = async (petId, token) => {
  try {
    const { data } = await axios.get(`https://ing-web-mascots.herokuapp.com/api/mascots/${petId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar las mascotas');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const createPetService = async (pet, token) => {
  try {
    const { data } = await axios.post('https://ing-web-mascots.herokuapp.com/api/mascots', pet, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar las mascotas');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const updatePetService = async (pet, petId, token) => {
  try {
    const { data } = await axios.put(`https://ing-web-mascots.herokuapp.com/api/mascots/${petId}`, pet, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar las mascotas');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const deletePetService = async (petId, token) => {
  try {
    const { data } = await axios.delete(`https://ing-web-mascots.herokuapp.com/api/mascots/${petId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar las mascotas');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};
