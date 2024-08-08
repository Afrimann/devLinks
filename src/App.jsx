import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/LoginAuth/LoginAuth.jsx'
import CreateAccount from './Components/CreateAccount/CreateAccount.jsx'
import Dashboard from './Components/Dashboard.jsx'
const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='' element ={<Login/>} />
        <Route path='createAccount' element = {<CreateAccount/>}/>
        <Route path='dashboard' element = {<Dashboard/>} />

      </Routes>

      
    </div>
  )
}

export default App
