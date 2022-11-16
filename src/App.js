import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showMissions } from './Redux/Missions/Missions';
import NavBar from './Components/NavBar';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Profile from './Pages/Profile';

import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showMissions());
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="SpaceTravelers-React_Redux/rockets" element={<Rockets />} />
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
