import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { handleRegister, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin, handleResetPassword, handleNameChange, signInUsingGoogle } = useAuth();
    return (
        <div className="height mx-auto">
            <div className='container text-center'>
                <h1 className='my-4 text-secondary'>Please Register</h1>
                <form onSubmit={handleRegister} className='pb-2'>
                    <input onBlur='handleNameChange' className='mb-4 p-1 w-75' type="text" name="" id="" placeholder='Your Name' />
                    <br />
                    <input onBlur='handleEmailChange' className='mb-4 p-1 w-75' type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input onBlur='handlePasswordChange' className='mb-4 p-1 w-75' type="password" name="" id="" placeholder='Your Password' />
                    <br />
                    <input className='btn btn-danger mb-4' type="submit" value="Register" />
                </form>

                <Link className='mb-2 reg' to='/login'>Already Registered?</Link>
            </div>
        </div>
    );
};

export default Register;