import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notice = ({ urlVehicleTax,
    urlTollTax,
    urlInsurance,
    urlTechnicalReview }) => {

    const [docs, setDocs] = useState([]);
    const [showModalF, setShowModalF] = useState(false);
    const [docName, setDocName] = useState("");
    const [date, setDate] = useState("");

    let today = new Date().getDate();
    let one = new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)).getDate();
    let two = new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000)).getDate();
    let three = new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)).getDate();
    let four = new Date(new Date().getTime() + (4 * 24 * 60 * 60 * 1000)).getDate();
    today = addZero(today);
    one = addZero(one);
    two = addZero(two);
    three = addZero(three);
    four = addZero(four);
    let y = new Date().getFullYear();
    let thisDay = `${today}.${addZero(new Date().getMonth() + 1)}.${y}`;
    let tomorrow = `${one}.${addZero(new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000)).getMonth() + 1)}.${y}`;
    let afterTwoDays = `${two}.${addZero(new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000)).getMonth() + 1)}.${y}`;
    let afterThreeDays = `${three}.${addZero(new Date(new Date().getTime() + (3 * 24 * 60 * 60 * 1000)).getMonth() + 1)}.${y}`;
    let afterFourDays = `${four}.${addZero(new Date(new Date().getTime() + (4 * 24 * 60 * 60 * 1000)).getMonth() + 1)}.${y}`;

    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };

    const getVehicleTaxes = () => {
        axios.get(urlVehicleTax)
            .then((res) => {
                setDocs(res.data);
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].until === thisDay
                        || res.data[i].until === tomorrow
                        || res.data[i].until === afterTwoDays
                        || res.data[i].until === afterThreeDays
                        || res.data[i].until === afterFourDays) {
                        setDocName(res.data[i].doc);
                        setDate(res.data[i].until);
                        setShowModalF(true);
                    }
                }
            })
    };

    const getTollTaxes = () => {
        axios.get(urlTollTax)
            .then((res) => {
                setDocs(res.data);
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].until === thisDay
                        || res.data[i].until === tomorrow
                        || res.data[i].until === afterTwoDays
                        || res.data[i].until === afterThreeDays
                        || res.data[i].until === afterFourDays) {
                        setDocName(res.data[i].doc);
                        setDate(res.data[i].until);
                        setShowModalF(true);
                    }
                }
            })
    };

    const getInsurance = () => {
        axios.get(urlInsurance)
            .then((res) => {
                setDocs(res.data);
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].until === thisDay
                        || res.data[i].until === tomorrow
                        || res.data[i].until === afterTwoDays
                        || res.data[i].until === afterThreeDays
                        || res.data[i].until === afterFourDays) {
                        setDocName(res.data[i].doc);
                        setDate(res.data[i].until);
                        setShowModalF(true);
                    }
                }
            })
    };

    const getTechnicalReview = () => {
        axios.get(urlTechnicalReview)
            .then((res) => {
                setDocs(res.data);
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].until === thisDay
                        || res.data[i].until === tomorrow
                        || res.data[i].until === afterTwoDays
                        || res.data[i].until === afterThreeDays
                        || res.data[i].until === afterFourDays) {
                        setDocName(res.data[i].doc);
                        setDate(res.data[i].until);
                        setShowModalF(true);
                    }
                }
            })
    };

    useEffect(() => {
        getVehicleTaxes();
        getTollTaxes();
        getInsurance();
        getTechnicalReview();
    }, [urlVehicleTax, urlTollTax, urlInsurance, urlTechnicalReview]);

    const closeModal = () => {
        setShowModalF(false);
    };

    return (
        <>
            {
                showModalF && <div className='modal'>
                    <div className='notice'>
                        <span className='close' onClick={closeModal}>&times;</span>
                        <p>{docName} payment pending</p>
                        <p>Pay before: {date}</p>
                    </div>
                </div>
            }
        </>
    )
};

export default Notice;