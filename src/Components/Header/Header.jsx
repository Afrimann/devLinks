import React, { useEffect, useState } from 'react'
import './Header.css'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import logoVector from '../Images/logoVector.png'


const Header = ({showProfile,showLink}) => {
    const [isActive,setIsActive] = useState(true)

    useEffect(() => {
        setIsActive(true)
    }, [])
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
                            <Link className={isActive ? 'linkActive' : ''}>Links</Link>
                        </li>
                        <li onClick={showProfile}>
                            <img src="" alt="" />
                            <Link >Profile Details</Link>
                        </li>
                    </nav>
                </div>
                <button>Preview</button>

            </div>
        </div>
    )
}

export default Header
