import { Fragment } from 'react';
import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';
import './Cardlist.css';

const CardList = ({ list, loading, CardComponent }) => {
  return (
    <div className="list">
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          {list.map(element => (
            <Card key={element._id}>
              <CardComponent {...element} />
            </Card>
          ))}
        </Fragment>
      )}
    </div>
  );
};

export default CardList;
