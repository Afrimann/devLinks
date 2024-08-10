import React from 'react'
import './Logo.css'
import logoVector from '../Images/logoVector.png'


const Logo = ({centered}) => {
  return (
    <div className={`logo ${centered ? 'centered' : ''}`}>
      <div className="logoVector">
        <img src={logoVector} alt="" />
      </div>
      <div className="logoName">
        <span>devlinks</span>
      </div>
    </div>
  )
}

export default Logo
