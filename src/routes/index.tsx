import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Profile from '../pages/Profile';
import Repo from '../pages/Repo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/:username" element={<Profile />} />
      <Route path="/:username/:reponame" element={<Repo />} />
    </Routes>
  );
}

export default App;
