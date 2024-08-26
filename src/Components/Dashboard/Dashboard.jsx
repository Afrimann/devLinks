import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header';
import './Dashboard.css';
import phoneMockUp from '../Images/preview-section.png';
import startVector from '../Images/startVector.png';
import NewLink from '../Modals/NewLink/NewLink.jsx';
import ProfileDetails from './ProfileDetails.jsx';
import Preview from '../Preview/Preview.jsx';

const Dashboard = () => {
  const [newLinks, setNewLinks] = useState([]);
  const [platforms, setPlatforms] = useState({});
  const [savedPlatforms, setSavedPlatforms] = useState({});
  const [links, setLinks] = useState({}); // New state to store links
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showEditLink, setShowEditLink] = useState(true);
  const navigate = useNavigate();

  const handlePreview = () => {
    // Save savedPlatforms to local storage
    localStorage.setItem('savedPlatforms', JSON.stringify(savedPlatforms));
    navigate('/preview', {
      state: {}
    })// Navigate to the preview component
  };

  const handleAddLink = () => {
    if (newLinks.length < 5) {
      setNewLinks([...newLinks, { id: newLinks.length, platform: '', link: '' }]);
    }
  };

  const handleRemoveLink = (id) => {
    // Filter out the link to be removed
    const updatedLinks = newLinks.filter(link => link.id !== id);
    
    // Re-index the remaining links
    const reIndexedLinks = updatedLinks.map((link, index) => ({ ...link, id: index }));
  
    // Update state with re-indexed links
    setNewLinks(reIndexedLinks);
  
    // Update platforms and savedPlatforms
    const updatedPlatforms = {};
    const updatedSavedPlatforms = {};
  
    reIndexedLinks.forEach((link, index) => {
      if (platforms[link.id]) {
        updatedPlatforms[index] = platforms[link.id];
      }
      if (savedPlatforms[link.id]) {
        updatedSavedPlatforms[index] = savedPlatforms[link.id];
      }
    });
  
    setPlatforms(updatedPlatforms);
    setSavedPlatforms(updatedSavedPlatforms);
    setLinks((prevLinks) => {
      const updatedLinksState = {};
      reIndexedLinks.forEach((link, index) => {
        updatedLinksState[index] = prevLinks[link.id];
      });
      return updatedLinksState;
    });
  };
  
  const handlePlatformChange = (id, platform, link) => {
    setPlatforms((prev) => ({ ...prev, [id]: platform }));
    setLinks((prev) => ({ ...prev, [id]: link })); // Store the link
  };

  const handleSave = () => {
    const platformsToSave = newLinks.reduce((acc, link) => {
      if (!platforms[link.id]) {
        alert('Please Select a Platform')
      }
      if (platforms[link.id]) {
        acc[link.id] = platforms[link.id]; // Save only if platform is defined
      }
      return acc;
    }, {});
    setSavedPlatforms(platformsToSave);
  };

  const copyToClipboard = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  const openLink = (id) => {
    const link = links[id];
    if (link) {
      window.open(link, '_blank'); // Open the link in a new tab
      copyToClipboard(link); // Copy the link to clipboard
    }
  };

  const hasLinks = newLinks.length > 0;

  const showProfile = () => {
    setShowEditLink(false);
    setShowEditProfile(true);
  };

  const showLink = () => {
    setShowEditLink(true);
    setShowEditProfile(false);
  };

  return (
    <div className='dashboard'>
      <div className="header">
        <Header showProfile={showProfile} showLink={showLink} handlePreview={handlePreview} />
      </div>
      <div className="dashboardContainer">
        <div className="leftSide">
          <img src={phoneMockUp} alt="Phone Mockup" />
          {/* Render saved platforms in the rectangles */}
          <div className="squareContainer">
            {Object.entries(savedPlatforms).map(([id, platform], idx) => (
              <div
                key={id}
                className="square"
                style={{ top: `${260 + idx * 50}px`, left: '185px' }}
                onClick={() => openLink(id)} // Click handler to open link
              >
                <span>{platform}</span> {/* Centered link text */}
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            ))}
          </div>
        </div>
        {showEditProfile && <ProfileDetails />}
        {showEditLink && (
          <div className="rightSide">
            <div className="rowUp">
              <div className='subRow1'>
                <p>Customize your links</p>
                <p>Add/edit/remove links below and then share all your profiles with the world!</p>
              </div>
              <div className='subRow2'>
                <div onClick={handleAddLink} className={`publish ${newLinks.length >= 5 ? 'disabled' : ''}`}>
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
                  {newLinks.map((link) => (
                    <NewLink
                      key={link.id}
                      index={link.id}
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
                <button
                  disabled={!hasLinks}
                  onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
