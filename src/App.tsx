import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ArticlePage } from './components/ArticlePage/ArticlePage';
import { Homepage } from './components/Homepage/Homepage';

import { useGetDataFromServer } from './controllers/controller';

export const App = () => {
  useGetDataFromServer();

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/article" element={<ArticlePage />} />
    </Routes>
  );
};
