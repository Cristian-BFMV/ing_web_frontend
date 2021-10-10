import React from 'react';
import { useHistory } from 'react-router-dom';
import Owner from './components/Owner/Owner';
import { getOwnerByIdService } from '../../services/Owners.service';
import Spinner from '../../components/Spinner/Spinner';

const OwnerGuestPage = () => {
  const [loading, setLoading] = React.useState(true);
  const [owner, setOwner] = React.useState({});
  const history = useHistory();
  const { id, role, guest_token } = history.location.state;

  React.useEffect(() => {
    const getOwnerById = async () => {
      try {
        const owner = await getOwnerByIdService(id, guest_token);
        setOwner(owner);
        console.log(owner);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    getOwnerById();
  }, [id, role, guest_token]);

  return (
    <React.Fragment>
      {loading ? <Spinner /> : <Owner name={owner.name} pets={owner.pets} token={guest_token} />}
    </React.Fragment>
  );
};

export default OwnerGuestPage;
