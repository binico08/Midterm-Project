import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem';
import UpdateItem from './components/UpdateItem';
import RemoveItem from './components/RemoveItem';
import SortItems from './components/SortItems';
import LowStockItems from './components/LowStockItems';
import DisplayItems from './components/DisplayItems';

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [message, setMessage] = useState('');

  return (
    <Router>
      <div className="App">
        <h1>Inventory Management System</h1>
        <Navbar />
        {message && <p className="message">{message}</p>}
        <Routes>
          <Route path="/" element={<AddItem inventory={inventory} setInventory={setInventory} setMessage={setMessage} />} />
          <Route path="/update" element={<UpdateItem inventory={inventory} setInventory={setInventory} setMessage={setMessage} />} />
          <Route path="/remove" element={<RemoveItem inventory={inventory} setInventory={setInventory} setMessage={setMessage} />} />
          <Route path="/sort" element={<SortItems inventory={inventory} />} />
          <Route path="/low-stock" element={<LowStockItems inventory={inventory} />} />
          <Route path="/display" element={<DisplayItems inventory={inventory} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
