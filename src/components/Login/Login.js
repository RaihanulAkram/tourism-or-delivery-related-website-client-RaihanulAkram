import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();

    const history = useHistory();

    const redirect_uri = location.state?.from || '/offers';

    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className='mx-auto my-5'>
            <div className='text-center my-5 py-5'>
                <h1 className='text-secondary'>Please Login</h1>
                <Button onClick={handleGoogleLogin} className='my-3 btn btn-danger'>Sign In with Google</Button>
                <br />
                <Link className='my-3 reg' to='/register'>New User?</Link>
            </div>
        </div>
    );
};

export default Login;