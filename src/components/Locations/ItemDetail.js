import { useParams } from 'react-router-dom';
import classes from './ItemDetail.module.css';

import DUMMY_LOCATIONS from '../../database/locations';

const ItemDetail = () => {
  const params = useParams();
  const { itemId } = params;

  const location = DUMMY_LOCATIONS.filter((item) => {
    return item.id === itemId;
  });

  const { name, id, description } = location[0];

  console.log(name);
  return (
    <div className={classes.container}>
      <h1>{id}</h1>
      <img
        src={require('../../images/' + name + '.png')}
        alt={name}
        className={classes.image}
      />
      <p>{description}</p>
    </div>
  );
};

export default ItemDetail;
