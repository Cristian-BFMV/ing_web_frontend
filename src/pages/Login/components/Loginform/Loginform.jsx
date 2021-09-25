import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Form from '../../../../components/Form/Form';
import { loginService } from '../../../../services/Auth.service';
import { AuthContext } from '../../../../context/Auth.context';

const LoginForm = ({ showModalError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { updateToken } = React.useContext(AuthContext);
  const history = useHistory();

  const onSubmit = async ({ username, password }) => {
    try {
      const token = await loginService(username, password);
      updateToken(token);
      history.push('/home');
    } catch (error) {
      showModalError(error.message);
    }
  };

  return (
    <Form title="Iniciar Sesión" onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} buttonText="Iniciar Sesión">
      <React.Fragment>
        <label className="form-label" htmlFor="username">
          Usuario
        </label>
        <input
          className={`form-input ${errors.username && 'form-input-invalid'}`}
          type="text"
          id="username"
          {...register('username', { required: true })}
        />
        <p className="form-input-error-message">{errors.username && 'Este campo es requerido'}</p>
        <label className="form-label" htmlFor="password">
          Contraseña
        </label>
        <input
          className={`form-input ${errors.password && 'form-input-invalid'}`}
          type="password"
          id="password"
          {...register('password', { required: true })}
        />
        <p className="form-input-error-message">{errors.password && 'Este campo es requerido'}</p>
      </React.Fragment>
    </Form>
  );
};

export default LoginForm;
