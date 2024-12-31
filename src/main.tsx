import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RewardsProvider } from './context/RewardsContext';
import App from './App';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RewardsProvider>
      <App />
    </RewardsProvider>
  </StrictMode>
);