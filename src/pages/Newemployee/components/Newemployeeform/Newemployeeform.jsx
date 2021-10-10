import React from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../../../components/Form/Form';
import EmployeeForm from '../../../../components/Employeeform/Employeeform';
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
      <EmployeeForm register={register} errors={errors} />
    </Form>
  );
};

export default NewEmployeeForm;
