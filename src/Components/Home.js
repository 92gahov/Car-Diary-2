import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Loader from './Loader';

const Home = () => {

    const [carOneName, setCarOneName] = useState("");
    const [carTwoName, setCarTwoName] = useState("");
    const [carThreeName, setCarThreeName] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:3001/car_one_name")
            .then((res) => {
                setCarOneName(res.data[0].name);
                setLoading(false);
            })
    }, [carOneName]);

    useEffect(() => {
        axios.get("http://localhost:3001/car_two_name")
            .then((res) => {
                setCarTwoName(res.data[0].name);
                setLoading(false);
            })
    }, [carTwoName]);

    useEffect(() => {
        axios.get("http://localhost:3001/car_three_name")
            .then((res) => {
                setCarThreeName(res.data[0].name);
                setLoading(false);
            })
    }, [carThreeName]);

    return (
        <>
            {!loading ? <div className='car-name-main'>
                <div className='car-name'>
                    <Link to="/carone">{carOneName}</Link>
                </div>
                <div className='car-name'>
                    <Link to="/cartwo">{carTwoName}</Link>
                </div>
                <div className='car-name'>
                    <Link to="/carthree">{carThreeName}</Link>
                </div>
            </div> : <Loader />}
        </>
    )
};

export default Home;