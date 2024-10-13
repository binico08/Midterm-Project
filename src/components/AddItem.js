import React, { useState } from 'react';
import { validateItem } from '../validations/validateItem';

const AddItem = ({ inventory, setInventory, setMessage }) => {
  const [form, setForm] = useState({ id: '', name: '', quantity: '', price: '', category: 'Clothing' });
  const [errors, setErrors] = useState({});
  const categories = ['Clothing', 'Electronics', 'Entertainment'];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addItem = () => {
    const newItem = { ...form, quantity: Number(form.quantity), price: Number(form.price) };
    const validationErrors = validateItem(newItem, inventory);
    if (Object.keys(validationErrors).length === 0) {
      setInventory([...inventory, newItem]);
      setMessage('Item added successfully!');
      setForm({ id: '', name: '', quantity: '', price: '', category: 'Clothing' });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-section">
  <h2>Add Item</h2>
  <label htmlFor="id">ID:</label>
  <input id="id" name="id" placeholder="ID" value={form.id} onChange={handleFormChange} />
  {errors.id && <p className="error">{errors.id}</p>}
  <label htmlFor="name">Name:</label>
  <input id="name" name="name" placeholder="Name" value={form.name} onChange={handleFormChange} />
  {errors.name && <p className="error">{errors.name}</p>}
  <label htmlFor="quantity">Quantity:</label>
  <input id="quantity" name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleFormChange} />
  {errors.quantity && <p className="error">{errors.quantity}</p>}
  <label htmlFor="price">Price:</label>
  <input id="price" name="price" type="number" placeholder="Price" value={form.price} onChange={handleFormChange} />
  {errors.price && <p className="error">{errors.price}</p>}
  <label htmlFor="category">Category:</label>
  <select id="category" name="category" value={form.category} onChange={handleFormChange}>
    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
  </select>
  {errors.category && <p className="error">{errors.category}</p>}
  <button style={{ backgroundColor: '#4CAF50', color: 'white', font: 'bold', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={addItem}>
    Add Item
  </button>
</div>

  );
};

export default AddItem;
