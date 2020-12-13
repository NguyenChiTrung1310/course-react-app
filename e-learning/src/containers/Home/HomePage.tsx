import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import './_homepage.scss';

const HomePage: React.FunctionComponent = () => {
  return (
    <div>
      <Grid className='home-page'>
        <Typography component='div' />
      </Grid>
    </div>
  );
};

export default HomePage;
