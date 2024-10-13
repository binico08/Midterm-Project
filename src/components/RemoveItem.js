import React, { useState } from 'react';

const RemoveItem = ({ inventory, setInventory, setMessage }) => {
  const [removeId, setRemoveId] = useState('');

  const removeItem = () => {
    const item = inventory.find(item => item.id === removeId);
    if (item) {
      setInventory(inventory.filter(item => item.id !== removeId));
      setMessage(`Item ${item.name} has been removed from the inventory`);
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div className="form-section">
      <h2>Remove Item</h2>
      <label htmlFor="removeId">Enter ID of the item to remove:</label>
      <input id="removeId" name="removeId" placeholder="ID" value={removeId} onChange={(e) => setRemoveId(e.target.value)} />
      <button
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={removeItem}
      >
        Remove Item
      </button>
    </div>
  );
};

export default RemoveItem;
