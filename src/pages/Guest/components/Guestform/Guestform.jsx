import { Fragment, useContext } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';
import { AuthContext } from '../../../../context/Auth.context';
import { guestTokenService } from '../../../../services/Owners.service';

const GuestForm = ({ showModalSuccess, showModalError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { token } = useContext(AuthContext);

  const onSubmit = async ({ email }) => {
    try {
      await guestTokenService(email, token);
      showModalSuccess();
    } catch (error) {
      showModalError(error.message);
    }
  };

  return (
    <Form
      title="Solicitar Accesso"
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      buttonText="Solicitar Acceso"
    >
      <Fragment>
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          className={`form-input ${errors.email && 'form-input-invalid'}`}
          type="text"
          id="email"
          {...register('email', { required: true })}
        />
        <p className="form-input-error-message">{errors.email && 'Este campo es requerido'}</p>
      </Fragment>
    </Form>
  );
};

export default GuestForm;
