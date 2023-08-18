import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Navigation from './components/navigation'; // Import your Navigation component
import Home from './pages/home';
import About from './pages/about';



function App() {
  return (
    <div>
      <Navigation /> {/* Render your navigation component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
