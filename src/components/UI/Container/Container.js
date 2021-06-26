import React from 'react';

import classes from './Container.module.css';

const Container = (props) => {
  const { children } = props || <></>;
  return <div className={classes.container}>{children}</div>;
};

export default Container;
