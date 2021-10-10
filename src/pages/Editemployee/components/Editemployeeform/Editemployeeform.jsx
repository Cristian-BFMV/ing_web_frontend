import React from 'react';
import { useForm } from 'react-hook-form';
import EmployeeForm from '../../../../components/Employeeform/Employeeform';
import Form from '../../../../components/Form/Form';
import { updateEmployeeService } from '../../../../services/Employees.service';
import { AuthContext } from '../../../../context/Auth.context';

const LoginForm = ({ employee, employeeId, showModalSuccess, showModalError }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: employee });
  const { token } = React.useContext(AuthContext);

  const onSubmit = async formData => {
    try {
      await updateEmployeeService(formData, employeeId, token);
      showModalSuccess();
    } catch (error) {
      showModalError(error.message);
    }
  };

  return (
    <Form title="Actualizar empleado" onSubmit={handleSubmit(onSubmit)} isSubmitting={isSubmitting} buttonText="Actualizar">
      <EmployeeForm register={register} errors={errors} />
    </Form>
  );
};

export default LoginForm;
