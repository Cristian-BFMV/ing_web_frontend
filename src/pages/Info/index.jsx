import React from 'react';
import Info from './components/Info/Info';
import Error from '../../components/Error/Error';
import Spinner from '../../components/Spinner/Spinner';
import { getEmployeeByIdService } from '../../services/Employees.service';
import { AuthContext } from '../../context/Auth.context';

const InfoPage = () => {
  const [employee, setEmployee] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { id } = React.useContext(AuthContext);

  React.useEffect(() => {
    const getEmployeeById = async () => {
      try {
        const employee = await getEmployeeByIdService(id);
        setEmployee(employee);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getEmployeeById();
  }, [id]);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {error ? (
            <Error title="Lo sentimos, ha ocurrido un problema" message="No ha sido posible cargar tu información" />
          ) : (
            <Info {...employee} />
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default InfoPage;
