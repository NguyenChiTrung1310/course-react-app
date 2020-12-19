import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Container } from '@material-ui/core';
import './_homepage.scss';

function HomePage() {
  return (
    <Grid className='home-page'>
      <Typography component='div' />
      <Container>
        <Box my={2}>
          {[...new Array(120)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Container>
    </Grid>
  );
}

export default HomePage;
