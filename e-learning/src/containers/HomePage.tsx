import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const HomePage: React.FunctionComponent = () => {
  return (
    <div>
      {/* <CssBaseline /> */}
      <Container maxWidth='sm'>
        <Typography component='div' style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </div>
  );
};

export default HomePage;
