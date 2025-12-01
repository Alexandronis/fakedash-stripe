import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./utils/i18n";
import { SettingsProvider } from "./context/SettingsContext";
import { AvatarProvider } from "./context/AvatarContext.tsx";
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SettingsProvider>
        <AvatarProvider>
          <App />
        </AvatarProvider>
      </SettingsProvider>
    </BrowserRouter>
  </StrictMode>,
);
