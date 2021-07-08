import React from 'react';

import Loader from 'react-loader-spinner';
const SubmitButton = ({ loading, children, style={} }) => {
  return (
    <button type="submit" data-loading={loading} disabled={loading} style={style}>
      {!loading ? (
        children
      ) : (
        <Loader
          type="ThreeDots"
          color="black"
          height={'0.5rem'}
          width={'100%'}
        />
      )}
    </button>
  );
};

export default SubmitButton;
