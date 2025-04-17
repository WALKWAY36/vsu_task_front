import { Box, Button, TextField } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnalyzeText } from '../api/requests/analyzeRequests';
import { analyzeTextClearError } from '../slices';
import { AppDispatch, RootState } from '../store';
import { ErrorDialog } from './Error';

interface PageProps {}

const Page: React.FC<PageProps> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector((state: RootState) => state.analyzeText);

  const [inputData, setInputData] = useState('Однажды Владислав и Екатерина решили поехать в Москву.');

  // Функция для создания HTML с подсветкой
  const highlightedText = useMemo(() => {
    if (!data) return inputData;

    const { persons = [], locations = [] } = data.entities || {};

    // Создаем regex для поиска всех сущностей
    const personRegex = new RegExp(`(${persons.join('|')})`, 'g');
    const locationRegex = new RegExp(`(${locations.join('|')})`, 'g');

    // Заменяем сущности на span с соответствующим стилем
    let result = inputData
      .replace(personRegex, '<span style="color: green; font-weight: bold;">$1</span>')
      .replace(locationRegex, '<span style="color: blue; font-weight: bold;">$1</span>');

    return result;
  }, [inputData, data]);

  if (error) return <ErrorDialog errorMessage={error} onClose={() => dispatch(analyzeTextClearError())} />;

  if (isLoading) return <div>Получение данных от сервера...</div>;

  return (
    <Box>
      {/* Поле для редактирования текста */}
      <TextField
        fullWidth
        label="Большой инпут"
        variant="outlined"
        multiline
        rows={8}
        value={inputData}
        sx={{
          fontSize: 20,
          '& .MuiInputBase-root': {
            fontSize: 20,
            padding: '16px',
          },
        }}
        onChange={(e) => setInputData(e.target.value)}
      />

      {/* Кнопка для анализа текста */}
      <Button onClick={() => dispatch(fetchAnalyzeText(inputData))}>Анализировать</Button>

      {/* Блок с подсвеченным текстом (только для просмотра) */}
      {data && (
        <Box
          sx={{
            fontSize: '20px',
            padding: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginTop: '16px',
            whiteSpace: 'pre-wrap',
          }}
          dangerouslySetInnerHTML={{ __html: highlightedText }}
        />
      )}
    </Box>
  );
};

export { Page };
