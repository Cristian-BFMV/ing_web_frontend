import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';

const GuestForm = () => {
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
      title="Solicitar Accesso"
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      buttonText="Solicitar Acceso"
    >
      <Fragment>
        <label className="form-label" htmlFor="document">
          Documento
        </label>
        <input
          className={`form-input ${errors.document && 'form-input-invalid'}`}
          type="text"
          id="document"
          {...register('document', { required: true })}
        />
        <p className="form-input-error-message">{errors.document && 'Este campo es requerido'}</p>
      </Fragment>
    </Form>
  );
};

export default GuestForm;
