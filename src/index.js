import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/go-yummy">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
