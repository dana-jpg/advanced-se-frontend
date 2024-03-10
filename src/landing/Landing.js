import React from 'react';
import './landing.css'; 
import { useNavigate } from 'react-router-dom';


function NewLandingPage() {

  const navigate = useNavigate();

  const search = () => {
    navigate('/properties'); 
  };

  return (
    <div className="full-background">
      <div className="search-container">
      <h1 className="search-header">Find <span style={{ color: '#E0FFFF' }}>Your</span> Dream Home</h1>
      <h2 className="search-subheader">Using <span style={{ color: '#E0FFFF' }}>Your</span> own words</h2>
        <input type="text" className="search-input" placeholder="Search properties" />
        <button className="search-button" onClick={search}>Search</button>
      </div>
    </div>
  );
}


export default NewLandingPage;
