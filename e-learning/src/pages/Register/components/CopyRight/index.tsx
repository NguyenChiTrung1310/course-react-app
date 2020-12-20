import { Typography, Link } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import React from 'react';

const CopyRight = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='./'>
        E-learning
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default CopyRight;
