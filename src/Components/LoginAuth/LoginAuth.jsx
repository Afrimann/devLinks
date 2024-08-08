import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../../Firebase'
import './Login.css'
import Logo from '../Logo/Logo'

const LoginAuth = () => {
    const [isfocused, setIsFocused] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const loginAuthHandler = async (e) => {
        try {
            if (!userEmail || !userPassword) {
                setError('Fill in all the fields')
            }
            await signInWithEmailAndPassword(auth, userEmail, userPassword)
            console.log('User Logged In Successfully');
            alert('Login Successful')

        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div className='login'>
            <div className="container">
                <div className="logo"><Logo /></div>
                <div className="loginForm">
                    <div className='formHead'>
                        <span>Login</span>
                        <span>Add your details below to get back into the app</span>
                    </div>

                    <div className="form">
                        <form action="">
                            <div className='input1'>
                                <label htmlFor="email">Email Address</label>
                                <div className="_">
                                    {!isfocused && !userEmail && <ion-icon name="mail-outline"></ion-icon>}
                                    <input type="email" placeholder={isfocused ? '' : 'e.g. alex@email.com'}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='input2'>
                                <label htmlFor="password">Password</label>
                                <div className="_">
                                    {!isfocused && !userPassword && <ion-icon name="mail-outline"></ion-icon>}
                                    <input type="password" placeholder={isfocused ? '' : 'Enter your password'}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        onChange={(e) => setUserPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="button">
                                <button
                                    type='button'
                                    onClick={loginAuthHandler}
                                    className='lgButton'
                                    >
                                <span>Login</span>
                                </button>
                                <p>{error}</p>
                            </div>
                            <div className="createAccount">
                                <a href="#"><Link to='/createAccount'>Don't have an account? Create account</Link></a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginAuth
