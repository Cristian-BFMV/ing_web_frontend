import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Error from '../../components/Error/Error';
import Spinner from '../../components/Spinner/Spinner';
import { verifyGuestToken } from '../../services/Auth.service';

const VerifyGuest = () => {
  const [error, setError] = React.useState(false);
  const { guest_token } = useParams();
  const history = useHistory();

  React.useEffect(() => {
    const verifyToken = async () => {
      try {
        const { id, role } = await verifyGuestToken(guest_token);
        history.push('/ownerguest', { id, role, guest_token });
      } catch (error) {
        setError(true);
      }
    };
    verifyToken();
  }, [guest_token, history]);

  return <React.Fragment>{error ? <Error title="Lo sentimos, ha ocurrido un problema" /> : <Spinner />}</React.Fragment>;
};

export default VerifyGuest;
