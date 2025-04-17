import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import React from 'react';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <AppBar
      position="absolute" // размещаем поверх содержимого
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none', // убираем тень
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          component="img"
          src="/img/logo.png"
          alt="logo"
          sx={{
            height: '50px', // можно изменить под нужный размер
            width: 'auto',
          }}
        />
      </Toolbar>
    </AppBar>
  );
};

export { NavBar };
