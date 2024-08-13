import React, { useState } from 'react';
import Header from '../Header/Header';
import './Dashboard.css';
import phoneMockUp from '../Images/preview-section.png';
import startVector from '../Images/startVector.png';
import NewLink from '../Modals/NewLink/NewLink.jsx';

const Dashboard = () => {
  const [newLinks, setNewLinks] = useState([]);
  const [platforms, setPlatforms] = useState({});

  const handleAddLink = () => {
    if (newLinks.length < 4) {
      setNewLinks([...newLinks, {}]);
    }
  };

  const handleRemoveLink = (index) => {
    setNewLinks(newLinks.filter((_, i) => i !== index));
    setPlatforms((prev) => {
      const updatedPlatforms = { ...prev };
      delete updatedPlatforms[index];
      return updatedPlatforms;
    });
  };

  const handlePlatformChange = (index, platform) => {
    setPlatforms((prev) => ({ ...prev, [index]: platform }));
  };

  const hasLinks = newLinks.length > 0;

  return (
    <div className='dashboard'>
      <div className="header">
        <Header />
      </div>
      <div className="dashboardContainer">
        <div className="leftSide">
          <img src={phoneMockUp} alt="Phone Mockup" />
          {/* Circle and Square Divs */}
          {Object.values(platforms).map((platform, idx) => (
            <div key={idx} className="square" style={{ top: `${246 + idx * 50}px`, left: '190px', width: '170px', height: '33px', backgroundColor: '#f0f0f0' }}>
              {platform}
            </div>
          ))}
        </div>
        <div className="rightSide">
          <div className="rowUp">
            <div className='subRow1'>
              <p>Customize your links</p>
              <p>Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>
            <div className='subRow2'>
              <div onClick={handleAddLink} className={`publish ${newLinks.length >= 4 ? 'disabled' : ''}`}>
                <span>+ Add new link</span>
              </div>
              {!hasLinks && (
                <div id='welcomePage' className="welcomePage">
                  <div className="content">
                    <div className="vector">
                      <img src={startVector} alt="Start Vector" />
                    </div>
                    <div className="message">
                      <p>Let’s get you started</p>
                      <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                    </div>
                  </div>
                </div>
              )}
              <div className='linksContainer'>
                {newLinks.map((_, index) => (
                  <NewLink
                    key={index}
                    index={index}
                    removeLink={handleRemoveLink}
                    onPlatformChange={handlePlatformChange}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="rowDown">
            <div className='rectangle'></div>
            <div className="saveBox">
              <button disabled={!hasLinks}>Save</button> {/* Disable if no links */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Dashboard;
