import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeScript, ChakraProvider, theme} from '@chakra-ui/react';
// import { AuthProvider } from './context/auth';
import { Provider } from 'react-redux';
import store from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor =  persistStore(store)
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    <App />
    </ChakraProvider>
    </PersistGate>
    </Provider>

);
