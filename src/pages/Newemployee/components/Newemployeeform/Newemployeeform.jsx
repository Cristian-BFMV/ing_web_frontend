import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';
import { createEmployeeService } from '../../../../services/Employees.service';
import { AuthContext } from '../../../../context/Auth.context';

const NewEmployeeForm = ({ showModalSuccess, showModalError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { token } = React.useContext(AuthContext);

  const onSubmit = async formData => {
    try {
      await createEmployeeService(formData, token);
      showModalSuccess();
    } catch (error) {
      showModalError(error.message);
    }
  };

  return (
    <Form title="Registrar empleado" onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} buttonText="Registrar">
      <React.Fragment>
        <label className="form-label" htmlFor="name">
          Nombres
        </label>
        <input
          className={`form-input ${errors.name && 'form-input-invalid'}`}
          type="text"
          id="name"
          {...register('name', { required: true })}
        />
        <p className="form-input-error-message">{errors.name && 'Este campo es requerido'}</p>
        <label className="form-label" htmlFor="last_name">
          Apellidos
        </label>
        <input
          className={`form-input ${errors.last_name && 'form-input-invalid'}`}
          type="text"
          id="last_name"
          {...register('last_name', { required: true })}
        />
        <p className="form-input-error-message">{errors.last_name && 'Este campo es requerido'}</p>
        <label className="form-label" htmlFor="email">
          Correo
        </label>
        <input
          className={`form-input ${errors.email && 'form-input-invalid'}`}
          type="text"
          id="email"
          {...register('email', { required: true })}
        />
        <p className="form-input-error-message">{errors.email && 'Este campo es requerido'}</p>
        <label className="form-label" htmlFor="email">
          Número de identidad
        </label>
        <input
          className={`form-input ${errors.document && 'form-input-invalid'}`}
          type="text"
          id="document"
          {...register('document', { required: true })}
        />
        <p className="form-input-error-message">{errors.document && 'Este campo es requerido'}</p>
        <label className="form-label" htmlFor="rol">
          Rol
        </label>
        <select {...register('role')} className="form-input" id="rol">
          <option value="Admin">Admin</option>
          <option value="Profesor">Profesor</option>
          <option value="Recursos Humanos">Recursos Humanos</option>
        </select>
      </React.Fragment>
    </Form>
  );
};

export default NewEmployeeForm;
