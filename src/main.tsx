import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fix for "Converting circular structure to JSON" error caused by some third-party scripts 
// trying to stringify React-managed DOM elements.
const originalStringify = JSON.stringify;
(window as any).JSON.stringify = function (value: any, replacer: any, space: any) {
  const cache = new Set();
  return originalStringify(value, (key, val) => {
    if (typeof val === 'object' && val !== null) {
      if (cache.has(val)) return;
      cache.add(val);
      // Strip React internal properties that cause circularity
      if (key.startsWith('__reactFiber') || key.startsWith('__reactProps')) {
        return '[ReactInternal]';
      }
    }
    return replacer ? replacer(key, val) : val;
  }, space);
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
