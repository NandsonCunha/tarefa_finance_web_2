import React from 'react';
import { BrowserRouter as Router, Routes,Route, Switch } from 'react-router-dom';
import HomePage from './screens/homeFinancing';
import Simulation from './screens/simulation';
function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/simulation"  element={<Simulation/>} />
      </Routes>
    </Router>
  );
}

export default Navigation;