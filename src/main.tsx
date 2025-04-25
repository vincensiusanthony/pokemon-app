import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/theme-utils';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Optionally, define a custom theme or use the default theme
const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});
import App from './App'; // Ensure the correct path to the App component
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);