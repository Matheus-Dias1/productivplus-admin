import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './UserListingButton.module.css';

const UserListingButton = ({ user }) => {
  const history = useHistory();
  const navigateToEditUser = () => {console.log(user)};

  return (
    <button
      className={classes['user-listing-button']}
      type="button"
      onClick={navigateToEditUser}
    >
      {user.email}
    </button>
  );
};

export default UserListingButton;
