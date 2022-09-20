import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Complete from './pages/Complete';
import Thanks from './pages/Thanks';
import Survey from './pages/Survey';
import Reports from './pages/reports/Reports';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/start' element={<Survey />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/thanks' element={<Thanks />} />
        <Route path='/done' element={<Complete />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
