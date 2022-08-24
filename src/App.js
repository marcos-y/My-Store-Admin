import React, { useState } from 'react';
import './App.css';
import Smartphones from './Pages/Smartphones/Smartphones';
import Drones from './Pages/Drones/Drones';
import Computers from './Pages/Computers/Computers';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div style={{ maxWidth: '100%', height: 'auto', height: '100%', backgroundColor: '#c4d8e5' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/drones" element={<Drones />} />
          <Route path="/computers" element={<Computers />} />
          <Route path="/addproduct" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
