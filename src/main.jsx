import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './layout';
import BehaviourPage from './pages/behaviour';
import GolangPage from './pages/golang';
import PythonPage from './pages/python';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="interview-qa" element={<Layout />}>
          <Route index element={<BehaviourPage />} />
          <Route path="golang" element={<GolangPage />} />
          <Route path="python" element={<PythonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
