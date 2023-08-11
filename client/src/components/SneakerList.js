import React, { useState, useEffect } from 'react';

function SneakerList() {
  const [sneakers, setSneakers] = useState([]);
  const [newSneaker, setNewSneaker] = useState({
    brand: '',
    model: '',
    color: '',
    price: 0,
  });

  useEffect(() => {
    fetch('http://localhost:7001/api/sneakers')
      .then(response => response.json())
      .then(data => {
        setSneakers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewSneaker(prevSneaker => ({
      ...prevSneaker,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Perform API call to create a new sneaker
    fetch('http://localhost:7001/api/sneakers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSneaker),
    })
      .then(response => response.json())
      .then(createdSneaker => {
        setSneakers(prevSneakers => [...prevSneakers, createdSneaker]);
        setNewSneaker({
          brand: '',
          model: '',
          color: '',
          price: 0,
        });
      })
      .catch(error => {
        console.error('Error creating sneaker:', error);
      });
  };

  return (
    <div>
      <h2>Sneaker List</h2>
      <ul>
        {sneakers.map(sneaker => (
          <li key={sneaker._id}>
            <p>Brand: {sneaker.brand}</p>
            <p>Model: {sneaker.model}</p>
            <p>Color: {sneaker.color}</p>
            <p>Price: {sneaker.price}</p>
          </li>
        ))}
      </ul>
      
      <h2>Create a New Sneaker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input type="text" name="brand" value={newSneaker.brand} onChange={handleInputChange} />
        </label>
        <label>
          Model:
          <input type="text" name="model" value={newSneaker.model} onChange={handleInputChange} />
        </label>
        <label>
          Color:
          <input type="text" name="color" value={newSneaker.color} onChange={handleInputChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={newSneaker.price} onChange={handleInputChange} />
        </label>
        <button type="submit">Create Sneaker</button>
      </form>
    </div>
  );
}

export default SneakerList;