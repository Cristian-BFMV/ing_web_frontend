import axios from 'axios';

export const getAllOwnerService = async token => {
  try {
    const { data } = await axios.get('https://ing-web-owner-module.herokuapp.com/api/owner', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar los propietarios');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const getOwnerByIdService = async (ownerId, token) => {
  try {
    const { data } = await axios.get(`https://ing-web-owner-module.herokuapp.com/api/owner/${ownerId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar los propietarios');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const createOwnerService = async (owner, token) => {
  try {
    const { data } = await axios.post('https://ing-web-owner-module.herokuapp.com/api/owner', owner, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar los propietarios');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const deleteOwnerService = async (ownerId, token) => {
  try {
    const { data } = await axios.delete(`https://ing-web-owner-module.herokuapp.com/api/owner/${ownerId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar los propietarios');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const updateOwnerService = async (owner, ownerId, token) => {
  try {
    const { data } = await axios.put(`https://ing-web-owner-module.herokuapp.com/api/owner/${ownerId}`, owner, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('No ha sido posible cargar los propietarios');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};
