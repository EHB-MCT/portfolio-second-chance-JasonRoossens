import React from 'react';
import SneakerList from './components/SneakerList';
import Navigation from './components/Navigation';


function App() {
  return (
    <div>
      <Navigation />
      <h1>My Sneaker App</h1>
      <SneakerList />
    </div>
  );
}

export default App;
