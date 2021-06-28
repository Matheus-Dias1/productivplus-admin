import React from 'react';
import Card from '../UI/Card/Card';

import classes from './Statistic.module.css';
const Statistic = ({name, value, difference}) => {
  return (
    <Card className={classes['statistics-card']}>
      <h2>{name}</h2>
      <div className={classes['statistics-card__value']}>
        <h3>{value}</h3>
        {!!difference && <h4>{difference}</h4>}
      </div>
    </Card>
  );
};

export default Statistic;
