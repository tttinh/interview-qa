import { BrowserRouter, Routes, Route } from 'react-router';
import BehaviorRoute from '@/app/routes/behavior';
import NotFoundRoute from '@/app/routes/not-found';
import GolangRoute from './routes/golang';
import PythonRoute from './routes/python';
import LandingRoute from './routes/landing';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="interview-qa">
            <Route index element={<LandingRoute />} />
            <Route path="behavior" element={<BehaviorRoute />} />
            <Route path="golang" element={<GolangRoute />} />
            <Route path="python" element={<PythonRoute />} />
          </Route>

          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
