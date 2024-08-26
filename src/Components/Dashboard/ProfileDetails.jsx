import React from 'react'
import './ProfileDetails.css'
import uploadImage from '../Images/uploadImage.png'

const ProfileDetails = () => {
    return (
        <div className="rightSide">
            <div className='rowUp'>
                <div className="subRow1">
                    <p>Profile Details</p>
                    <p>Add your details to create a personal touch to your profile</p>
                </div>

                <div className="profile-content-wrapper">
                    <div className="profile-picture">
                        <div className="profile-picture-content">
                            <span className="text">Profile picture</span>
                            <div className="picture">
                                <div className="upload">
                                    <div className="image">
                                        <img src={uploadImage} alt="image" />
                                        <span>+Upload Image</span>
                                    </div>
                                    <div className="upload-condition">
                                        <span>Image must be below 1024x1024px.</span>
                                        <span>Use PNG or JPG</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="user-info">
                        <div>
                        <div className="info">
                            <label htmlFor="firstName">First name*</label>
                            <input type="text" placeholder='e.g. John' />
                        </div>
                        <div className="info">
                            <label htmlFor="lastName">Last name*</label>
                            <input type="text" placeholder='e.g. Appleseed' />
                        </div>
                        <div className="info">
                            <label htmlFor="firstName">Email</label>
                            <input type="text" placeholder='e.g. email@example.com' />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rowDown">
              <div className='rectangle'></div>
              <div className="saveBox">
                <button>
                  Save
                </button>
              </div>
            </div>
        </div>
    )
}

export default ProfileDetails
