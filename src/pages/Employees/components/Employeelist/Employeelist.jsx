import { useHistory } from 'react-router-dom';
import EmployeeCard from '../Employeecard/Employeecard';
import CardList from '../../../../components/Cardlist/Cardlist';
import Error from '../../../../components/Error/Error';
import PanelSection from '../../../../components/Panelsection/Panelsection';

const EmployeeList = ({ employees, loading, error }) => {
  const history = useHistory();
  return (
    <div className="employees-container">
      <PanelSection panelTitle="Empleados" panelButton="Nuevo empleado" panelAction={() => history.push('/newemployee')} />
      {error ? (
        <Error
          title="Lo sentimos, ha ocurrido un problema"
          message="No ha sido posible cargar la información de los empleados"
        />
      ) : (
        <CardList list={employees} loading={loading} CardComponent={EmployeeCard} />
      )}
    </div>
  );
};

export default EmployeeList;
