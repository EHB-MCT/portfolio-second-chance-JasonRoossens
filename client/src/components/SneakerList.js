import React, { useState, useEffect } from 'react';
import '../assets/styles/SneakerList.css'; // Import your CSS file

function SneakerList() {
  const [sneakers, setSneakers] = useState([]);
  const [newSneaker, setNewSneaker] = useState({
    brand: '',
    model: '',
    color: '',
    price: 0,
  });
  const [filterBrand, setFilterBrand] = useState('');
  const [filterColor, setFilterColor] = useState('');
  const [sortPrice, setSortPrice] = useState('asc');

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

  const handleDelete = id => {
    const confirmDelete = window.confirm('Are you sure you want to delete this sneaker?');
    if (confirmDelete) {
      // Perform API call to delete a sneaker
      fetch(`http://localhost:7001/api/sneakers/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(() => {
          setSneakers(prevSneakers => prevSneakers.filter(sneaker => sneaker._id !== id));
        })
        .catch(error => {
          console.error('Error deleting sneaker:', error);
        });
    }
  };

  const filteredSneakers = sneakers.filter(sneaker =>
    sneaker.brand.toLowerCase().includes(filterBrand.toLowerCase()) &&
    sneaker.color.toLowerCase().includes(filterColor.toLowerCase())
  );

  const sortedSneakers = filteredSneakers.slice().sort((a, b) => {
    if (sortPrice === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  return (
    <div className="sneaker-list-container">
      <h2 className="sneaker-list-title">My Sneaker Collection</h2>
      <div className="filter-sort-container">
        <div className="filter-container">
          <label>
            Filter by Brand:
            <input
              type="text"
              value={filterBrand}
              onChange={event => setFilterBrand(event.target.value)}
            />
          </label>
        </div>
        <div className="filter-container">
          <label>
            Filter by Color:
            <input
              type="text"
              value={filterColor}
              onChange={event => setFilterColor(event.target.value)}
            />
          </label>
        </div>
        <div className="sort-container">
          <label>
            Sort by Price:
            <select
              value={sortPrice}
              onChange={event => setSortPrice(event.target.value)}
            >
              <option value="asc">Low to high</option>
              <option value="desc">High to low</option>
            </select>
          </label>
        </div>
      </div>
      <ul className="sneaker-list">
        {sortedSneakers.map(sneaker => (
          <li key={sneaker._id} className="sneaker-item">
            <p><strong>Brand:</strong> {sneaker.brand}</p>
            <p><strong>Model:</strong> {sneaker.model}</p>
            <p><strong>Color:</strong> {sneaker.color}</p>
            <p><strong>Price:</strong> {sneaker.price}</p>
            <button className="delete-button" onClick={() => handleDelete(sneaker._id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <h2 className="create-title">Add sneaker to collection</h2>
      <form className="create-form" onSubmit={handleSubmit}>
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
        <button className="create-button" type="submit">Create Sneaker</button>
      </form>
    </div>
  );
}

export default SneakerList;