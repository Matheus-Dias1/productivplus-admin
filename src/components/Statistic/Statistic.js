import React from 'react';
import Card from '../UI/Card/Card';

import classes from './Statistic.module.css';
const Statistic = (props) => {
  return (
    <Card className={classes['statistics-card']}>
      <h2>{props.name}</h2>
      <div className={classes['statistics-card__value']}>
        <h3>{props.value}</h3>
        {!!props.difference && <h4>{props.difference}</h4>}
      </div>
    </Card>
  );
};

export default Statistic;
