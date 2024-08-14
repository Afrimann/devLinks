import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../../../Firebase'
import '../LoginAuth/Login.css'
import './CreateAccount.css'
import Logo from '../Logo/Logo'

const CreateAccount = () => {
    const [isfocused, setIsFocused] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userConfirmedPassword, setUserConfirmedPassword] = useState('')
    const [error, setError] = useState('')
    const [err,setErr] = useState('')
    const [isEmpty,setIsEmpty] = useState(false)
    const navigate = useNavigate()

    const validateInputs = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!userEmail) {
            setError('Email is required');
            setIsEmpty(true);
            return false;
        } else if (!emailRegex.test(userEmail)) {
            setError('Invalid email format');
            return false;
        }
        if (!userPassword) {
            setError('Password is required');
            setIsEmpty(true);
            return false;
        } else if (userPassword.length < 8) {
            setError('Password must be at least 8 characters');
            return false;
        }
        if (userPassword !== userConfirmedPassword) {
            setError('Passwords must match');
            return false;
        }
        return true;
    };

    const CreateAccountHandler = async () => {
        if (!validateInputs()) return;
        try {
            setIsEmpty(false);
            await createUserWithEmailAndPassword(auth, userEmail, userPassword);
            console.log('User Account Created Successfully');
            navigate('/');
            
        } catch (error) {
            setError(error.message);
        }
    };

    const inputFields = [
        { label: 'Email Address', type: 'email', placeholder: 'e.g. alex@email.com', value: userEmail, setValue: setUserEmail },
        { label: 'Create Password', type: 'password', placeholder: 'Enter your password', value: userPassword, setValue: setUserPassword },
        { label: 'Confirm Password', type: 'password', placeholder: 'Enter your password', value: userConfirmedPassword, setValue: setUserConfirmedPassword }
    ];
    // edit the ion-icon for pasword , it's that of email that's there for now
    return (
        <div className='login'>
            <div className="container">
                <div className="logo"><Logo /></div>
                <div className="loginForm createAccForm">
                    <div className='formHead'>
                        <span>Create account</span>
                        <span>Let’s get you started sharing your links!</span>
                    </div>
    
                    <div className="form">
                        <form>
                            {inputFields.map((field, index) => (
                                <div key={index} className={index === 0 ? 'input1' : 'input2'}>
                                    <label htmlFor={field.label.toLowerCase().replace(" ", "")}>{field.label}</label>
                                    <div className="_">
                                        {!isfocused && !field.value && <ion-icon name="mail-outline"></ion-icon>}
                                        <input
                                            className={isEmpty? 'empty' : ''}
                                            type={field.type}
                                            placeholder={isfocused ? '' : field.placeholder}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            onChange={(e) => field.setValue(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            ))}
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
    );
    
}

export default CreateAccount


