import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import Form from '../../../../components/Form/Form';
import PetForm from '../Newpetform/Newpetform';
import { createPetService } from '../../../../services/Pets.service';
import { AuthContext } from '../../../../context/Auth.context';

//{
// defaultValues: { name: 'fg', breed: '', size: 'Pequeño', age: '', vaccinePlan: '', attendance: '', owners },
//}

const NewPetForm = ({ showModalSuccess, showModalError, owners }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      owners: [{ _id: owners[0]._id }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'owners',
  });
  const { token } = React.useContext(AuthContext);

  const onSubmit = async formData => {
    try {
      await createPetService(formData, token);
      showModalSuccess();
    } catch (error) {
      showModalError(error.message);
    }
  };

  const addField = React.useCallback(() => {
    append({ owners: [{ _id: owners[0]._id }] });
  }, [append, owners]);

  const removeField = React.useCallback(() => {
    remove(fields.length - 1);
  }, [remove, fields]);

  return (
    <Form title="Registrar mascota" onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} buttonText="Registrar">
      <PetForm
        register={register}
        errors={errors}
        fields={fields}
        owners={owners}
        addField={addField}
        removeField={removeField}
      />
    </Form>
  );
};

export default NewPetForm;
