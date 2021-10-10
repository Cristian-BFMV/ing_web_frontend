import { useHistory } from 'react-router-dom';
import OwnerCard from '../Ownercard/Ownercard';
import CardList from '../../../../components/Cardlist/Cardlist';
import Error from '../../../../components/Error/Error';
import PanelSection from '../../../../components/Panelsection/Panelsection';

const OwnerList = ({ owners, loading, error }) => {
  const history = useHistory();
  return (
    <div className="owners-container">
      <PanelSection
        panelTitle="Propietarios"
        panelButton="Nuevo propietario"
        panelAction={() => history.push('/newowner')}
      />
      {error ? (
        <Error
          title="Lo sentimos, ha ocurrido un problema"
          message="No ha sido posible cargar la información de los empleados"
        />
      ) : (
        <CardList list={owners} loading={loading} CardComponent={OwnerCard} />
      )}
    </div>
  );
};

export default OwnerList;
