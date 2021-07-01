import React, { useEffect, useReducer, useState } from 'react';
import Loader from 'react-loader-spinner';

import getUsers from '../../assets/dummy-data/DUMMY_USERS';
import classes from './ListUsers.module.css';

import UserListingButton from '../../components/UserListingButton/UserListingButton';
import ButtonSelect from '../../components/ButtonSelect/ButtonSelect';
import SearchIcon from '../../assets/icons/SearchIcon';
import { initData, configReducer } from './userListingReducer';

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(2);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const [config, dispatchConfig] = useReducer(configReducer, initData);

  const fetchUsers = async () => {
    setLoading(true);
    setTimeout(() => {
      const response = getUsers(config);
      if (config.page === 1) setUsers(response.users);
      else setUsers((state) => [...state, ...response.users]);
      setTotalPages(response.totalPages);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchUsers();
  }, [config]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers([]);
      dispatchConfig({ type: 'CHANGE_SEARCH', query: searchQuery });
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const loadNextPage = () => {
    dispatchConfig({ type: 'NEXT_PAGE' });
  };

  const btnOptions = [
    { name: 'TODOS OS USUÁRIOS', value: 'all' },
    { name: 'USUÁRIOS PREMIUM', value: 'premium' },
  ];

  const onFilterChange = (value) => {
    setUsers([]);
    dispatchConfig({ type: 'CHANGE_FILTER', filter: value });
  };

  const onSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={classes['user-listing-container']}>
      <div className={classes['user-listing-inputs']}>
        <ButtonSelect
          options={btnOptions}
          onOptionChange={onFilterChange}
          defaultValue={'all'}
        />
        <div className={classes['search-user']}>
          <input
            placeholder="E-MAIL"
            value={searchQuery}
            onChange={onSearchChange}
            type="text"
            spellCheck="false"
          />
          <SearchIcon />
        </div>
      </div>
      <div className={classes['user-list']}>
        {users.map((user, index) => (
          <UserListingButton user={user} key={index} />
        ))}
      </div>
      {totalPages > config.page && !loading && (
        <button
          className={classes['button-load-more']}
          type="button"
          onClick={loadNextPage}
        >
          CARREGAR MAIS
        </button>
      )}
      {loading && (
        <div className={`loader-box`}>
          <Loader
            style={{ marginTop: '1rem', width: '1rem' }}
            type="Grid"
            color="#e3aa27"
            height={'2.5rem'}
            width={'2.5rem'}
          />
        </div>
      )}
      {!loading && !users.length && <p>NENHUM USUÁRIO ENCONTRADO</p>}
    </div>
  );
};

export default ListUsers;
