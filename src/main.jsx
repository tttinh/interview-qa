import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './app/layout';
import FAQ from './app/faq';
import { behaviour } from '@/assets/behaviour';
import { golang } from '@/assets/golang';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="interview-qa" element={<Layout />}>
          <Route index element={<FAQ data={behaviour} />} />
          <Route path="golang" element={<FAQ data={golang} />} />
          <Route path="python" element={<FAQ data={behaviour} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
