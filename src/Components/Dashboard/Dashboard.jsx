import React from 'react'
import Header from '../Header/Header'
import './Dashboard.css'
import phoneMockUp from '../Images/preview-section.png'
import startVector from '../Images/startVector.png'

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <div className="header">
        <Header />
      </div>
      <div className="dashboardContainer">
        <div className="leftSide">
          <img src={phoneMockUp} alt="" />
        </div>
        <div className="rightSide">
          <div className="rowUp">
            <div className='subRow1'>
              <p>Customize your links</p>
              <p>Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>
            <div className='subRow2'>
              <div className="publish">
                <span>+ Add new link</span>
              </div>
              <div className="welcomePage">
                <div className="content">
                  <div className="vector">
                    <img src={startVector} alt="" />
                  </div>
                  <div className="message">
                    <p>Let’s get you started</p>
                    <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="rowDown">
              <div className='rectangle'></div>
              <div className="saveBox">
                <button>Save</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
