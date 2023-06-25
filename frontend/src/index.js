import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeScript, ChakraProvider, theme} from '@chakra-ui/react';
import { AuthProvider } from './context/auth';
// import { AuthProvider } from './context/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<AuthProvider>
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
    </ChakraProvider>
</AuthProvider>


);
