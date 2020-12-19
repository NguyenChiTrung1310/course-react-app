import React from 'react';
import AppMenu from './components/AppBar';
import HomePage from './pages/Home';
import { Box, Container, CssBaseline } from '@material-ui/core';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <CssBaseline />

      <AppMenu />
      {/* <HomePage /> */}
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
    </div>
  );
}

export default App;
