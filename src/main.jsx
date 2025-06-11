import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import '@fontsource/roboto';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createTheme(); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

