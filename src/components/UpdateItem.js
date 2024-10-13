import React, { useState } from 'react';

const UpdateItem = ({ inventory, setInventory, setMessage }) => {
  const [updateForm, setUpdateForm] = useState({ id: '', field: 'quantity', newValue: '' });
  const [errors, setErrors] = useState({});

  const updateItem = () => {
    const index = inventory.findIndex(item => item.id === updateForm.id);
    if (index !== -1) {
      const updatedInventory = [...inventory];
      const field = updateForm.field;
      const oldValue = updatedInventory[index][field];
      updatedInventory[index][field] = Number(updateForm.newValue);

      if (updateForm.newValue > 0) {
        setInventory(updatedInventory);
        setMessage(`Item ${inventory[index].name}'s ${field} updated from ${oldValue} to ${updateForm.newValue}`);
        setErrors({});
      } else {
        setErrors({ newValue: 'Value must be greater than 0' });
      }
    } else {
      setMessage('Item not found!');
    }
  };

  return (
    <div className="form-section">
      <h2>Update Item</h2> 
      <label htmlfor="id">ID:</label>
      <input name="id" placeholder="ID" value={updateForm.id} onChange={(e) => setUpdateForm({ ...updateForm, id: e.target.value })} />
      
      <label htmlfor="id">Quantity:</label>
      <select name="field" value={updateForm.field} onChange={(e) => setUpdateForm({ ...updateForm, field: e.target.value })}>
        <option value="quantity">Quantity</option>
        <option value="price"><p>₱   </p>Price</option> 
      </select>
      <input name="newValue" type="number" placeholder="New Value" value={updateForm.newValue} onChange={(e) => setUpdateForm({ ...updateForm, newValue: e.target.value })} />
      {errors.newValue && <p className="error">{errors.newValue}</p>}
      <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={updateItem}>Update Item</button>
    </div>
  );
};

export default UpdateItem;
