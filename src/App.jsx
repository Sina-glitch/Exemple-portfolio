import React from "react";
import { Route, Routes, BrowserRouter }
  from 'react-router-dom'
import MainPage from './pages/MainPage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;