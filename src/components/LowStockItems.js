import React from 'react';

const LowStockItems = ({ inventory }) => {
  const lowStockItems = inventory.filter(item => item.quantity <= 5);

  return (
    <div>
      <h2>Low Stock Items</h2>
      {lowStockItems.length === 0 ? (
        <p>No items with low stock</p>
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
            {lowStockItems.map(item => (
              <tr key={item.id}>
                <td>  {item.id}</td>
                <td>  {item.name}</td>
                <td>  {item.quantity}</td>
                <td>₱ {item.price}</td>
                <td>  {item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LowStockItems;
