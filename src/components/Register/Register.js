import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Register.css'

const Register = () => {
    const { handleRegister, handleEmailChange, handlePasswordChange, error, toggleLogin, isLogin, handleResetPassword, handleNameChange, signInUsingGoogle } = useAuth();
    return (
        <div className="mx-5 text-center">
            <form onSubmit={handleRegister}>
                <h3 className="text-primary my-5">Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger"><p className='text-center'>{error}</p></div>
                <button type="submit" className="btn btn-primary">
                    {isLogin ? 'Login' : 'Register'}
                </button>
                <button type="button" onClick={handleResetPassword} className="btn btn-secondary ms-1">Reset Password</button>

            </form>
            <br /><br /><br />
            <div>--------------------------------</div>
            <br /><br /><br />
            <button onClick={signInUsingGoogle} className='btn btn-danger mb-5'>Google Sign In</button>
        </div>
    );
};

export default Register;