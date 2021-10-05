import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';
import OwnerForm from '../../../../components/Ownerform/Ownerform';
import { updateOwnerService } from '../../../../services/Owners.service';
import { AuthContext } from '../../../../context/Auth.context';

const EditOwnerForm = ({ owner, ownerId, showModalSuccess, showModalError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: owner });
  const { token } = React.useContext(AuthContext);

  const onSubmit = async formData => {
    try {
      await updateOwnerService(formData, ownerId, token);
      showModalSuccess();
    } catch (error) {
      showModalError(error.message);
    }
  };

  return (
    <Form
      title="Actualizar propietario"
      onSubmit={handleSubmit(onSubmit)}
      isSubmitting={isSubmitting}
      buttonText="Actualizar"
    >
      <OwnerForm register={register} errors={errors} />
    </Form>
  );
};

export default EditOwnerForm;
