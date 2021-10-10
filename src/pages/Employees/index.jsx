import React from 'react';
import * as employeeService from '../../services/Employees.service';
import EmployeeList from './components/Employeelist/Employeelist';

const EmployeesPage = () => {
  const [employees, setEmployees] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const getEmployees = async () => {
      try {
        const employees = await employeeService.getAllEmployeesService();
        setEmployees(employees);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getEmployees();
  }, []);

  return <EmployeeList employees={employees} loading={loading} error={error} />;
};

export default EmployeesPage;
