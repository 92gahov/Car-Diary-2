import React from 'react';
import loading from "../img/kOnzy.gif";

const Loader = () => {
    return (
        <div className='loader'>
            <img alt='' src={loading}></img>
        </div>
    )
};

export default Loader;