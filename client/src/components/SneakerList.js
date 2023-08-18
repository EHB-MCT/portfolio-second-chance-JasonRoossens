import React, { useState, useEffect } from 'react';
import '../assets/styles/SneakerList.css'; // Import your CSS file

function SneakerList() {
  const [sneakers, setSneakers] = useState([]);
  const [newSneaker, setNewSneaker] = useState({
    brand: '',
    model: '',
    color: '',
    price: 0,
    image: '', // Add image property
  });
  const [filterBrand, setFilterBrand] = useState('');
  const [filterColor, setFilterColor] = useState('');
  const [sortPrice, setSortPrice] = useState('desc');

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
          image: '', // Reset image field
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
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return sortPrice === 'asc' ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="sneaker-list-container">
      <h2 className="create-title">Add a sneaker to your collection</h2>
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
        <label>
          Image URL:
          <input type="text" name="image" value={newSneaker.image} onChange={handleInputChange} />
        </label>
        <button className="create-button" type="submit">Add Sneaker</button>
      </form>
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
            Sort by created at:
            <select
              value={sortPrice}
              onChange={event => setSortPrice(event.target.value)}
            > 
              <option value="desc">Newest</option>
              <option value="asc">Oldest</option>
            </select>
          </label>
        </div>
      </div>
      <ul className="sneaker-list">
        {sortedSneakers.map(sneaker => (
          <li key={sneaker._id} className="sneaker-item">
            {sneaker.image && <img src={sneaker.image} alt={`${sneaker.brand} ${sneaker.model}`} className="sneaker-image" />}
            <p><strong>Brand:</strong> {sneaker.brand}</p>
            <p><strong>Model:</strong> {sneaker.model}</p>
            <p><strong>Color:</strong> {sneaker.color}</p>
            <p><strong>Price:</strong> {sneaker.price}</p>   
            <p><strong>Created at:</strong> {new Date(sneaker.createdAt).toLocaleString()}</p>
            <button className="delete-button" onClick={() => handleDelete(sneaker._id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      
    </div>
  );
}

export default SneakerList;