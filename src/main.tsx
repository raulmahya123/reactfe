import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from "react-router-dom";
import App from './App';
import './index.css';
import './i18n';
import { useEffect } from 'react';

/* Scroll handler untuk anchor */
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [hash]);

  return null;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);