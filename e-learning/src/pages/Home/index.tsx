import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import './_homepage.scss';

function HomePage() {
  return (
    <Grid className='home-page'>
      <Typography component='div' />
      <Typography>ABC</Typography>
    </Grid>
  );
}

export default HomePage;
