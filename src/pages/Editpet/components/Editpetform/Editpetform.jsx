import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';
import PetForm from '../../../../components/Petform/Petform';
import { updatePetService } from '../../../../services/Pets.service';
import { AuthContext } from '../../../../context/Auth.context';

const EditOwnerForm = ({ pet, petId, showModalSuccess, showModalError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: pet });
  const { token } = React.useContext(AuthContext);

  const onSubmit = async formData => {
    try {
      await updatePetService(formData, petId, token);
      showModalSuccess();
    } catch (error) {
      showModalError(error.message);
    }
  };

  return (
    <Form title="Actualizar Mascota" onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} buttonText="Actualizar">
      <PetForm register={register} errors={errors} />
    </Form>
  );
};

export default EditOwnerForm;
