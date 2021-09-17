import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const user = null;

    return (
        <div style={{backgroundColor: 'red'}}>
            <h4>NAVBAR</h4>
            <Link to='/'>Home</Link>
            <div>
                {
                    user ? (
                        <div>
                            <img alt={user.result.name} src={user.result.imageUrl} oneError={user.result.name.charAt(0)} />
                            <p>{user.result.name}</p>
                            <button type='button'>Log out</button>
                        </div>
                    ) : (
                        <Link to='/auth'>Sign in</Link>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
