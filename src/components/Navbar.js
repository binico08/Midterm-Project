import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active' : '')}
            end
          >
            Add Item
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/update" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Update Item
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/remove" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Remove Item
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/sort" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Sort Items
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/low-stock" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Low Stock Items
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/display" 
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Display Items
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
