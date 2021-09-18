import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';

const EmployeeSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Form
      title="Registrar usuario y contraseña"
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      buttonText="Registrar"
    >
      <Fragment>
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
      </Fragment>
    </Form>
  );
};

export default EmployeeSignUpForm;
