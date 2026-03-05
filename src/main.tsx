import './styles/global.scss';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './providers/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)