import React from 'react';
import Modal from '../UI/Modal/Modal';

import classes from './UserDetails.module.css';

import EnvelopeIcon from '../../assets/icons/EnvelopeIcon'
import UserIcon from '../../assets/icons/UserIcon'

const UserDetails = ({ user, onClose }) => {
  console.log('oiieee');
  return (
    <>
      <Modal show={!!user.id} onClose={onClose}>
        <div className={classes['user-details-container']}>
          <div className={classes['general-user-info']}>
            <div className={classes['group']}>
              <UserIcon/>
              <p>{user.name}</p>
            </div>
            <div className={classes['group']}>
              <EnvelopeIcon/>
              <p>{user.email}</p>
            </div>
          </div>
          <div className={classes['premium-user-info']}>
            <p>USUÁRIO </p>
            {user.premium ? (
              <p style={{ color: '#E3AA27' }}>PREMIUM</p>
            ) : (
              <p style={{ color: '#EDE9D3' }}>STANDARD</p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UserDetails;
