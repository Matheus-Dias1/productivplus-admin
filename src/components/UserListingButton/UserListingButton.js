import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './UserListingButton.module.css';

const UserListingButton = ({ onUserClick, user }) => {
  const history = useHistory();

  return (
    <button
      className={classes['user-listing-button']}
      type="button"
      onClick={()=>onUserClick(user)}
    >
      {user.email}
    </button>
  );
};

export default UserListingButton;
