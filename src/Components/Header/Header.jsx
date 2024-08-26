import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import { Link, useNavigate } from 'react-router-dom'
import logoVector from '../Images/logoVector.png'

const Header = ({ showProfile, showLink, handlePreview }) => {
    const [isLinkActive, setIsLinkActive] = useState(true)
    const [isProfileActive, setIsProfileActive] = useState(false)
    const navigate = useNavigate()
    
    const handleProfileActive = () => {
        setIsLinkActive(false)
        setIsProfileActive(true)
    }
    const handleLinkActive = () => {
        setIsProfileActive(false)
        setIsLinkActive(true)
    }

    
    return (
        <div className='header'>
            <div className="headerContainer">
                <div className="headerLogo">
                    <div className="logoVector">
                        <img src={logoVector} alt="" />
                    </div>
                    <div className="logoName">
                        <span>devlinks</span>
                    </div>
                </div>
                <div className="headerNav">
                    <nav>
                        <li onClick={showLink}>
                            <img src="" alt="" />
                            <Link
                                onClick={handleLinkActive}
                                className={isLinkActive ? 'linkActive' : ''}>Links</Link>
                        </li>
                        <li onClick={showProfile}>
                            <img src="" alt="" />
                            <Link onClick={
                                handleProfileActive
                            } className={isProfileActive ? 'linkActive' : ''} >Profile Details</Link>
                        </li>
                    </nav>
                </div>
                <button
                onClick={handlePreview}
                >Preview</button>

            </div>
        </div>
    )
}

export default Header
