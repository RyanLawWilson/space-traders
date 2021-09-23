import React, { useState } from 'react';
import Input from './Input';
import GoogleLogin from 'react-google-login';

const Auth = () => {
    const [isSignup, setIsSignup] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }

    const googleSuccess = (res) => {
        console.log(res)
    }

    const googleFailure = () => {
        console.log('Google sign in was NOT successful');
    }

    return (
        <div style={{marginLeft: "200px"}}>
            <h4>{isSignup ? 'Sign Up' : 'Sign In'}</h4>
            <form onSubmit={handleSubmit}>
                {/* Doing isSignup && ( ... ) is a good trick to only display information if some state is true */}
                {
                    isSignup && (
                        <>
                            <Input type='text' name='firstName' placeholder='first name' onChange={handleChange} autoFocus />
                            <Input type='text' name='lastName' placeholder='last name' onChange={handleChange} />
                        </>
                    )
                }
                <Input type='email' name="email" placeholder="email" onChange={handleChange} />
                <Input type={showPassword ? 'text' : 'password'} name="password" placeholder='password' onChange={handleChange} />
                { isSignup && <Input type={showPassword ? 'text' : 'password'} name="repeat" placeholder="repeat password" onChange={handleChange} /> }

                {/* Render a button that allows you to log in with a Google account */}
                <GoogleLogin 
                    clientId="GOOGLE_ID"
                    render={(renderProps) => (
                        <button type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Sign In</button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy='single_host_origin'
                />


                <button type='submit'>{ isSignup ? 'sign up' : 'sign in'}</button>

                <button type='button' onClick={switchMode}>{isSignup ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up'}</button>
            </form>
        </div>
    )
}

export default Auth
