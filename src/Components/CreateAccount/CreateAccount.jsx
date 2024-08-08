import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link, Await } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../../../Firebase'
import '../LoginAuth/Login.css'
import Logo from '../Logo/Logo'

const CreateAccount = () => {
    const [isfocused, setIsFocused] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmedPassword, setUserConfirmedPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()


    const CreateAccountHandler = async (e) => {
        try {
            if (userPassword !== userConfirmedPassword) {
                setError('Passowrds must match')
            }
            if (userEmail && userPassword && userConfirmedPassword && userPassword === userConfirmedPassword) {
                await createUserWithEmailAndPassword(auth, userEmail, userConfirmedPassword)
                console.log('UserAccount Created Successfully');
                navigate('/', {
                    state: {}
                })
            }

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
                        <span>Create account</span>
                        <span>Let’s get you started sharing your links!</span>
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
                                        required
                                    />
                                </div>
                            </div>
                            <div className='input2'>
                                <label htmlFor="password">Create Password</label>
                                <div className="_">
                                    {!isfocused && !userPassword && <ion-icon name="mail-outline"></ion-icon>}
                                    <input type="password" placeholder={isfocused ? '' : 'Enter your password'}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        onChange={(e) => setUserPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='input2'>
                                <label htmlFor="confirmPassword" className='conPass'>Confirm Password</label>
                                <div className="_">
                                    {!isfocused && !userConfirmedPassword && <ion-icon name="mail-outline"></ion-icon>}
                                    <input type="password" placeholder={isfocused ? '' : 'Enter your password'}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        onChange={(e) => setUserConfirmedPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="condition">
                                <span className='passCondition'>Password must contain at least 8 characters</span>
                            </div>

                            <div className="button">
                                <button
                                    type='button'
                                    className='lgButton'
                                    onClick={CreateAccountHandler}
                                    >
                                    <span>Create new account</span>
                                </button>
                                {error && <p>{error}</p>}
                            </div>
                            <div className="createAccount">
                                <a href="#"><Link to='/'>Already have an account? Login</Link></a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount
