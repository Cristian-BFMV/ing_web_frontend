import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';
import ScheduleForm from '../../../../components/Scheduleform/Scheduleform';
import { createScheduleService } from '../../../../services/Schedule.service';
import { AuthContext } from '../../../../context/Auth.context';

const NewOwnerForm = ({ showModalSuccess, showModalError, pets }) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { token } = React.useContext(AuthContext);

  const onSubmit = async formData => {
    try {
      await createScheduleService(formData, token);
      showModalSuccess();
    } catch (error) {
      showModalError(error.message);
    }
  };

  return (
    <Form title="Registrar propietario" onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} buttonText="Registrar">
      <ScheduleForm register={register} errors={errors} control={control} pets={pets} />
    </Form>
  );
};

export default NewOwnerForm;
