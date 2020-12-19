import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import AppMenu from '../../components/AppBar';
import './_homepage.scss';

function HomePage() {
  return (
    <Grid className='home-page'>
      <AppMenu />
      <Typography component='div' />
    </Grid>
  );
}

export default HomePage;
