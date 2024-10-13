import React, { useState } from 'react';
import './SortItems.css';

const SortItems = ({ inventory }) => {
  const [sortBy, setSortBy] = useState('quantity');
  const [order, setOrder] = useState('ascending');

  const sortedInventory = [...inventory].sort((a, b) => {
    if (sortBy === 'quantity') {
      return order === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity;
    } else {
      return order === 'ascending' ? a.price - b.price : b.price - a.price;
    }
  });

  return (
    <div className="sort-items">
      <h2>Sort Items</h2>
      <div className="controls">
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="quantity">Quantity</option>
          <option value="price">Price</option>
        </select>
        <label>Order:</label>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      {sortedInventory.length === 0 ? (
        <p>No items available for sorting.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {sortedInventory.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>₱{item.price.toFixed(2)}</td>
                <td>{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SortItems;
