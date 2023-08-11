import React, { useState, useEffect } from 'react';

function SneakerList() {
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7001/api/sneakers') // Update the endpoint
      .then(response => response.json())
      .then(data => {
        setSneakers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
    </div>
  );
}

export default SneakerList;