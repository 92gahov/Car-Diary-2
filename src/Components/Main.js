import React from 'react';
import { Link, Routes, Route } from "react-router-dom";
import Heading from './Heading';
import home from "../img/home_icon.png";
import Home from './Home';
import CarOne from './Cars/CarOne';
import CarTwo from './Cars/CarTwo';
import CarThree from './Cars/CarThree';
import Footer from './Footer';
import Missing from './Missing';

const Main = () => {
    return (
        <>
            <Heading />
            <div className='home-icon'>
                <Link to="/">
                    <img alt='' src={home}></img>
                </Link>
            </div>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/carone' element={<CarOne />}></Route>
                <Route path='/cartwo' element={<CarTwo />}></Route>
                <Route path='/carthree' element={<CarThree />}></Route>
                <Route path='*' element={<Missing />}></Route>
            </Routes>
            <Footer />
        </>
    )
};

export default Main;