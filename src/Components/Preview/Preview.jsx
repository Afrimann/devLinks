import React, { useEffect, useState } from 'react';
import phoneMockUp from '../Images/preview-section.png';
import './Preview.css'
import Header from '../Header/Header';
const Preview = () => {
  const [savedPlatforms, setSavedPlatforms] = useState({});

  useEffect(() => {
    const platforms = localStorage.getItem('savedPlatforms');
    if (platforms) {
      setSavedPlatforms(JSON.parse(platforms));
    }
  }, []);

  return (
    <div className='dashboard'>
      <div className="header">
        <Header/>
      </div>
      <div className="dashboardContainer">
     <div className="previewContainer">
      <img src={phoneMockUp} alt="Phone Mockup" />
      {Object.entries(savedPlatforms).length > 0 ? (
        <div className="squareContainer">
          {Object.entries(savedPlatforms).map(([id, platform]) => (
            <div key={id} className="square">
              <span>{platform}</span>
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          ))}
        </div>
      ) : (
        <p className='errorMessage'>Nothing to preview</p>
      )}
    </div>
        </div>
        </div>

  );
};

export default Preview;
