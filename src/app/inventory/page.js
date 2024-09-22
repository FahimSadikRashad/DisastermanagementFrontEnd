'use client';

import React, { useState } from 'react';

const InventoryPage = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '' });
  const [editItemId, setEditItemId] = useState(null);
  const [editItemData, setEditItemData] = useState({ name: '', quantity: '' });

  // Handle form input for new item
  const handleNewItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new inventory item
  const addItem = (e) => {
    e.preventDefault();
    const newId = Date.now(); // Generate a unique ID based on the current timestamp
    const newItemWithId = { id: newId, ...newItem };
    setItems((prevItems) => [...prevItems, newItemWithId]);
    setNewItem({ name: '', quantity: '' });
  };

  // Handle edit form input
  const handleEditItemChange = (e) => {
    const { name, value } = e.target;
    setEditItemData((prev) => ({ ...prev, [name]: value }));
  };

  // Edit an existing inventory item
  const editItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...editItemData } : item
      )
    );
    setEditItemId(null);
    setEditItemData({ name: '', quantity: '' });
  };

  // Delete an inventory item
  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Inventory Management</h1>

      {/* Add new item form */}
      <form onSubmit={addItem} className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Add New Item</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={newItem.name}
            placeholder="Item Name"
            onChange={handleNewItemChange}
            required
            className="p-2 border rounded-lg"
          />
          <input
            type="number"
            name="quantity"
            value={newItem.quantity}
            placeholder="Quantity"
            onChange={handleNewItemChange}
            required
            className="p-2 border rounded-lg"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Add Item
        </button>
      </form>

      {/* Display inventory items */}
      <h2 className="text-2xl font-semibold mb-4">Inventory List</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No items in inventory</p>
      ) : (
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Quantity</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                {editItemId === item.id ? (
                  <>
                    {/* Edit mode */}
                    <td className="py-2 px-4">
                      <input
                        type="text"
                        name="name"
                        value={editItemData.name}
                        onChange={handleEditItemChange}
                        required
                        className="p-2 border rounded-lg"
                      />
                    </td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        name="quantity"
                        value={editItemData.quantity}
                        onChange={handleEditItemChange}
                        required
                        className="p-2 border rounded-lg"
                      />
                    </td>
                    <td className="py-2 px-4 flex space-x-2">
                      <button
                        onClick={() => editItem(item.id)}
                        className="bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditItemId(null)}
                        className="bg-gray-400 text-white px-4 py-1 rounded-lg hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    {/* View mode */}
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4 flex space-x-2">
                      <button
                        onClick={() => {
                          setEditItemId(item.id);
                          setEditItemData({ name: item.name, quantity: item.quantity });
                        }}
                        className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InventoryPage;
