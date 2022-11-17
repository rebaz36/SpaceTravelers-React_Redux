/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="SpaceTravelers-React_Redux/"
          element={<Navigate to="rockets" />}
        />
        <Route
          path="SpaceTravelers-React_Redux/rockets"
          element={<Rockets />}
        />
        <Route
          path="SpaceTravelers-React_Redux/missions"
          element={<Missions />}
        />
        <Route
          path="SpaceTravelers-React_Redux/profile"
          element={<Profile />}
        />
      </Routes>
    </div>
  );
}

export default App;
