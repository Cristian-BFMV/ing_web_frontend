import axios from 'axios';

export const loginService = async (username, password) => {
  try {
    const { data } = await axios.post('https://ing-web-security-module.herokuapp.com/api/auth/signin', {
      username,
      password,
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error('Usuario o contraseña incorrectos');
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};

export const signupService = async ({ username, password }, id) => {
  try {
    const { data } = await axios.post(`https://ing-web-security-module.herokuapp.com/api/auth/signup/${id}`, {
      username,
      password,
    });
    return data;
  } catch (error) {
    if (error.response.status === 400) throw new Error(error.response.message);
    throw new Error('Lo sentimos este servicio no esta disponible, intentalo más tarde');
  }
};
