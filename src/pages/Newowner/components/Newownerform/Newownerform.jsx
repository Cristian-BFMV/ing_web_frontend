import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';
import OwnerForm from '../../../../components/Ownerform/Ownerform';
import { createOwnerService } from '../../../../services/Owners.service';
import { AuthContext } from '../../../../context/Auth.context';

const NewOwnerForm = ({ showModalSuccess, showModalError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { token } = React.useContext(AuthContext);

  const onSubmit = async formData => {
    try {
      await createOwnerService(formData, token);
      showModalSuccess();
    } catch (error) {
      showModalError(error.message);
    }
  };

  return (
    <Form title="Registrar propietario" onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} buttonText="Registrar">
      <OwnerForm register={register} errors={errors} />
    </Form>
  );
};

export default NewOwnerForm;
