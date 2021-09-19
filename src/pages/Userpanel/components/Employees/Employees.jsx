import EmployeeCard from './Employeecard';
import './Employees.css';

const Employees = () => {
  return (
    <div className="employees-container">
      <div className="employees-header">
        <h2 className="employees-title">Empleados</h2>
        <button className="employees-cta">Nuevo empleado</button>
      </div>
      <div className="employees-list">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
    </div>
  );
};

export default Employees;
