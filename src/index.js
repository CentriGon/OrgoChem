import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HeroSection } from './Routes/HeroSection';
import { Home } from './Routes/Home';
import { TextbookSection } from './Routes/TextbookSection';
import { ComingSoon } from './Routes/ComingSoon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HeroSection />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/chapter/:chapterId/textbook" element={<TextbookSection />} />
      <Route path="/chapter/:chapterId/notes" element={<ComingSoon />}/>
      <Route path="/chapter/:chapterId/quiz" element={<ComingSoon />}/>
    </Routes>
  </BrowserRouter>
);
