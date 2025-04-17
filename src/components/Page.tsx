import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalyzeText } from '../api/requests/tableRequests';
import { analyzeTextClearError } from '../slices';
import { AppDispatch, RootState } from '../store';
import { ErrorDialog } from './Error';

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector((state: RootState) => state.analyzeText);

  const [inputData, setInputData] = useState('Однажды Владислав и Екатерина решили поехать в Москву.');

  if (error) return <ErrorDialog errorMessage={error} onClose={() => dispatch(analyzeTextClearError())} />;

  if (isLoading) return <div>Получение данных от сервера...</div>;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 2,
        width: '50%',
        overflow: 'hidden',
      }}
    >
      {/* Контент сверху */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(7px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          paddingTop: '20px',
          paddingLeft: '40px',
          paddingRight: '40px',
          paddingBottom: '60px',
          zIndex: 2,
        }}
      >
        <Typography
          sx={{
            letterSpacing: '2px',
            color: 'white',
            fontFamily: 'Bounded, sans-serif',
            fontSize: '20px',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Проверка текста
        </Typography>
        <TextField
          fullWidth
          label="Введите текст для проверки"
          variant="outlined"
          multiline
          rows={8}
          sx={{
            fontSize: 20,
            fontFamily: 'Bounded, sans-serif',

            '& .MuiInputBase-root': {
              fontFamily: 'Bounded, sans-serif',
              fontSize: 20,
              // padding: '16px',
              color: 'white',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.3)', // или любой другой цвет
              borderWidth: '1px',
            },
            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(255, 255, 255, 0.6)', // обводка при наведении
            },

            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#F70FFF', // обводка при фокусе (нажатии)
            },

            '& label': {
              color: 'rgba(255, 255, 255, 0.3)',
              fontFamily: 'Bounded, sans-serif',
              fontSize: 20,
            },

            '& label.Mui-focused': {
              color: 'white',
              fontFamily: 'Bounded, sans-serif',
              fontSize: 20,
            },
          }}
        />

        <Button
          variant="contained"
          onClick={() => dispatch(fetchAnalyzeText(inputData))}
          sx={{
            top: '30px',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            backgroundColor: 'rgba(0,0,0,1)',
            fontFamily: 'Bounded, sans-serif',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            letterSpacing: '2px',
          }}
        >
          Проверить
        </Button>
      </Box>
    </Box>
  );
};

export { Page };
