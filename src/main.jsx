import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { behaviour } from '@/assets/behaviour';
import { golang } from '@/assets/golang';
import '@/index.css';
import FAQLayout from '@/app/faq/layout';
import FAQPage from '@/app/faq/page';
import CommingSoon from '@/components/comming-soon';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="interview-qa" element={<FAQLayout />}>
          <Route index element={<FAQPage data={behaviour} />} />
          <Route path="golang" element={<FAQPage data={golang} />} />
          <Route path="python" element={<CommingSoon />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
