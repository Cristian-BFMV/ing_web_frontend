import { useParams } from 'react-router-dom';
import EmployeeSignupForm from './components/Employeesignupform/Employeesignupform';

const EmployeeSignUpPage = () => {
  const { employee_id } = useParams();
  console.log(employee_id);
  return <EmployeeSignupForm />;
};

export default EmployeeSignUpPage;
