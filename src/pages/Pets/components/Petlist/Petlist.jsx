import { useHistory } from 'react-router-dom';
import PetCard from '../Petcard/Petcard';
import CardList from '../../../../components/Cardlist/Cardlist';
import Error from '../../../../components/Error/Error';
import PanelSection from '../../../../components/Panelsection/Panelsection';

const PetList = ({ pets, loading, error }) => {
  const history = useHistory();
  return (
    <div className="pets-container">
      <PanelSection panelTitle="Mascotas" panelButton="Nuevo mascota" panelAction={() => history.push('/newpet')} />
      {error ? (
        <Error
          title="Lo sentimos, ha ocurrido un problema"
          message="No ha sido posible cargar la información de las mascotas"
        />
      ) : (
        <CardList list={pets} loading={loading} CardComponent={PetCard} />
      )}
    </div>
  );
};

export default PetList;
