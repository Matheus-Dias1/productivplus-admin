import React from 'react';
import Card from '../UI/Card/Card';

import classes from './Suggestion.module.css';
import TrashIcon from '../../assets/icons/TrashIcon';

const Suggestion = ({ name, description, media, onDelete }) => {
  return (
    <Card className={classes['suggestion-card']}>
      <h2>{name}</h2>
      {media && <p className={classes['media-link']}>{media}</p>}
      <p>{description}</p>
      <button onClick={onDelete}><TrashIcon/></button>
    </Card>
  );
};

export default Suggestion;
