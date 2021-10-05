import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';
import PetForm from '../../../../components/Petform/Petform';
import { createPetService } from '../../../../services/Pets.service';
import { AuthContext } from '../../../../context/Auth.context';

const NewPetForm = ({ showModalSuccess, showModalError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { token } = React.useContext(AuthContext);

  const onSubmit = async formData => {
    try {
      await createPetService(formData, token);
      showModalSuccess();
    } catch (error) {
      showModalError(error.message);
    }
  };

  return (
    <Form title="Registrar mascota" onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} buttonText="Registrar">
      <PetForm register={register} errors={errors} />
    </Form>
  );
};

export default NewPetForm;
