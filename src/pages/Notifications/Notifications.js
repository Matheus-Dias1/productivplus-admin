import React from 'react';
import classes from './Notifications.module.css'

import Card from '../../components/UI/Card/Card';

const Notifications = () => {
  return (
    <div className='content-container'>
  <div className={`content ${classes['centralize']}`}>
        <Card className={classes['notification-card']}>
          <h2>COMPONHA A NOTIFICAÇÃO</h2>
        </Card>
      </div>
    </div>
  );
}

export default Notifications
