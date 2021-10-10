import React from 'react';
import * as ownerService from '../../services/Owners.service';
import OwnerList from './components/Ownerlist/Ownerlist';
import { AuthContext } from '../../context/Auth.context';

const OwnersPage = () => {
  const [owners, setOwners] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { token } = React.useContext(AuthContext);

  React.useEffect(() => {
    const getOwners = async () => {
      try {
        const owners = await ownerService.getAllOwnerService(token);
        setOwners(owners);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getOwners();
  }, [token]);

  return <OwnerList owners={owners} loading={loading} error={error} />;
};

export default OwnersPage;
