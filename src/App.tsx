import { Box } from '@mui/material';

import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Page } from './components/Page';

const App = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        margin: 0,
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'black',
      }}
    >
      <Box
        component="img"
        src="/img/background.png"
        alt="bg"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // objectFit: 'contain', // сохраняет пропорции
          zIndex: 0,
        }}
      />

      <NavBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Page />
      </Box>
      <Footer />
    </Box>
  );
};

export { App };
