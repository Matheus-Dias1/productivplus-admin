export const initData = {
  page: 1,
  filter: 'all',
  search: '',
};

export const configReducer = (state, action) => {
  if (action.type === 'NEXT_PAGE') {
    return {
      page: (state.page += 1),
      filter: state.filter,
      search: state.search,
    };
  }

  if (action.type === 'CHANGE_FILTER') {
    return {
      page: 1,
      filter: action.filter,
      search: state.search,
    };
  }

  if (action.type === 'CHANGE_SEARCH') {
    return {
      page: 1,
      filter: state.filter,
      search: action.query,
    };
  }

  return initData;
};
