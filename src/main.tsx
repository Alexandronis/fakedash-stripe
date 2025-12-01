import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import "./utils/i18n";
import { SettingsProvider } from "./context/SettingsContext";
import { AvatarProvider } from "./context/AvatarContext.tsx";
import { HomeDataProvider } from "./context/HomeDataContext.tsx";
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <HomeDataProvider>
        <SettingsProvider>
          <AvatarProvider>
            <App />
          </AvatarProvider>
        </SettingsProvider>
      </HomeDataProvider>
    </BrowserRouter>
  </StrictMode>,
);
