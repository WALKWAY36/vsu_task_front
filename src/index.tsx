import ReactDOM from 'react-dom/client';
import { Box } from '@mui/material';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './store';

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
