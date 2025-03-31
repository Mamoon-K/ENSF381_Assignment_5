import React from 'react';

function DisplayStatus({ type, message }) {
  const styles = {
    success: { color: 'green', marginTop: '10px' },
    error: { color: 'red', marginTop: '10px' }
  };

  return <div style={styles[type]}>{message}</div>;
}

export default DisplayStatus;
