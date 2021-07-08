import React from 'react';
import Card from '../UI/Card/Card';

import classes from './Suggestion.module.css';

const Suggestion = ({ name, description, media }) => {
  return (
    <Card className={classes['suggestion-card']}>
      <h2>{name}</h2>
      {media && <p className={classes['media-link']}>{media}</p>}
      <p>{description}</p>
    </Card>
  );
};

export default Suggestion;
