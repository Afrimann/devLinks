import React, { useState } from 'react';
import './NewLink.css';
import LinkVector from '../../Images/linkVector.svg';

const NewLink = ({ index, removeLink, onPlatformChange }) => {
  const [platform, setPlatform] = useState('');
  const [link, setLink] = useState('');

  const handlePlatformChange = (e) => {
    const selectedPlatform = e.target.value;
    setPlatform(selectedPlatform);
    onPlatformChange(index, selectedPlatform, link); // Pass platform value and link to the parent
  };

  const handleLinkChange = (e) => {
    const newLink = e.target.value;
    setLink(newLink);
    onPlatformChange(index, platform, newLink); // Pass platform value and new link to the parent
  };

  return (
    <div className='newLink'>
      <div className="linkHead">
        <div className="linkNo">
          <span className="vector_"><img src={LinkVector} alt="" /></span>
          <span className="number">{`Link #${index + 1}`}</span>
        </div>
        <button onClick={() => removeLink(index)}>Remove</button>
      </div>
      <div className="linkDetails">
        <form>
          <div>
            <label htmlFor="platform">Platform</label>
            <select name="platform" id="platform" value={platform} onChange={handlePlatformChange}>
              <option value="">Select Platform</option>
              <option value="Github">Github</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Twitter">Twitter</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <label htmlFor="link">Link</label>
            <input
              type="text"
              name="link"
              id="link"
              placeholder='e.g https://www.github.com/afrimann'
              value={link}
              onChange={handleLinkChange} // Update link value
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewLink;
