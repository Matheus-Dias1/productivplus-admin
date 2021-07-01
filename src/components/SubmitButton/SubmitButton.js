import React from 'react';

import Loader from 'react-loader-spinner';
const SubmitButton = ({ loading, children }) => {
  return (
    <button type="submit" data-loading={loading} disabled={loading}>
      {!loading ? (
        children
      ) : (
        <Loader
          type="ThreeDots"
          color="black"
          height={'0.5rem'}
          width={'auto'}
        />
      )}
    </button>
  );
};

export default SubmitButton;
