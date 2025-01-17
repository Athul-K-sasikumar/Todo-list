import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
     
    <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
