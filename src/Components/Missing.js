import React from 'react';
import { Link } from 'react-router-dom';

const Missing = () => {
    return (
        <main className='missing'>
            <div>
                <h2>404</h2>
            </div>
            <div>
                <h3>Oops! Page not found</h3>
                <p>Sorry, but the page you are looking for is not found.</p>
                <p><Link to="/">GO BACK HOME</Link></p>
            </div>
        </main>
    )
};

export default Missing;