import axios from 'axios';

export const createEmployeeService = async (employee, token) => {
  try {
    const { data } = await axios.post('https://ing-web-security-module.herokuapp.com/api/employees', employee, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('Usuario o contraseña incorrectos');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const updateEmployeeService = async (employee, employeeId, token) => {
  try {
    const { data } = await axios.put(`https://ing-web-security-module.herokuapp.com/api/employees/${employeeId}`, employee, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('Usuario o contraseña incorrectos');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const deleteEmployeeService = async (employeeId, token) => {
  try {
    await axios.delete(`https://ing-web-security-module.herokuapp.com/api/employees/${employeeId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    if (error.response.status === 400) throw new Error('Usuario o contraseña incorrectos');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const getAllEmployeesService = async () => {
  try {
    const { data } = await axios.get('https://ing-web-security-module.herokuapp.com/api/employees');
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('Usuario o contraseña incorrectos');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const getEmployeeByIdService = async employeeId => {
  try {
    const { data } = await axios.get(`https://ing-web-security-module.herokuapp.com/api/employees/${employeeId}`);
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('Usuario o contraseña incorrectos');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};
