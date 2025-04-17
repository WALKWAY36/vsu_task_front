import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: 'rgba(0,0,0,0.3)',
        backdropFilter: 'blur(7px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontFamily: 'Bounded, sans-serif',
          letterSpacing: '1px',
          fontSize: '14px',
          textAlign: 'center',
        }}
      >
        © 2025 V&K Все права защищены.
      </Typography>
    </Box>
  );
};

export { Footer };
