import React, { useEffect, useState } from 'react';
import DUMMY_USERS from '../../assets/dummy-data/DUMMY_USERS';
import classes from './ListUsers.module.css';

import UserListingButton from '../../components/UserListingButton/UserListingButton';

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(DUMMY_USERS);
  }, []);

  const loadNextPage = () => {};
  return (
    <div className={classes['user-listing-container']}>
      <div className={classes['user-list']}>
        {users.map((user) => (
          <UserListingButton user={user} key={user.id} />
        ))}
      </div>
      <button
        className={classes['button-load-more']}
        type="button"
        onClick={loadNextPage}
      >
        CARREGAR MAIS
      </button>
    </div>
  );
};

export default ListUsers;
