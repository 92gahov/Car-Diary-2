import React, { useState } from 'react';
import Insurance from './Documents/Insurance';
import VehicleTax from './Documents/VehicleTax';
import ServiceBook from './Documents/ServiceBook';
import TechnicalReview from './Documents/TechnicalReview';
import TollTax from './Documents/TollTax';

const Documents = ({ urlVehicleTax,
    urlTollTax,
    urlInsurance,
    urlTechnicalReview,
    urlServiceBook }) => {

    const [showVehicleTax, setShowVehicleTax] = useState(true);
    const [showTollTax, setShowTollTax] = useState(false);
    const [showInsurance, setShowInsurance] = useState(false);
    const [showTechnicalReview, setShowTechnicalReview] = useState(false);
    const [showServiceBook, setShowServiceBook] = useState(false);

    const handleVehicleTax = () => {
        setShowVehicleTax(true);
        setShowTollTax(false);
        setShowInsurance(false);
        setShowTechnicalReview(false);
        setShowServiceBook(false);
    };

    const handleTollTax = () => {
        setShowVehicleTax(false);
        setShowTollTax(true);
        setShowInsurance(false);
        setShowTechnicalReview(false);
        setShowServiceBook(false);
    };

    const handleInsurance = () => {
        setShowVehicleTax(false);
        setShowTollTax(false);
        setShowInsurance(true);
        setShowTechnicalReview(false);
        setShowServiceBook(false);
    };

    const handleTechicalReview = () => {
        setShowVehicleTax(false);
        setShowTollTax(false);
        setShowInsurance(false);
        setShowTechnicalReview(true);
        setShowServiceBook(false);
    };

    const handleServiceBook = () => {
        setShowVehicleTax(false);
        setShowTollTax(false);
        setShowInsurance(false);
        setShowTechnicalReview(false);
        setShowServiceBook(true);
    };

    return (
        <>
            <div className='buttons-main'>
                <div className='button'>
                    <button onClick={handleVehicleTax}>VEHICLE TAX</button>
                </div>
                <div className='button'>
                    <button onClick={handleTollTax}>TOLL TAX</button>
                </div>
                <div className='button'>
                    <button onClick={handleInsurance}>INSURANCE</button>
                </div>
                <div className='button'>
                    <button onClick={handleTechicalReview}>TECHNICAL REVIEW</button>
                </div>
                <div className='button'>
                    <button onClick={handleServiceBook}>SERVICE BOOK</button>
                </div>
            </div>
            {
                showVehicleTax && <VehicleTax urlVehicleTax={urlVehicleTax} />
            }
            {
                showTollTax && <TollTax urlTollTax={urlTollTax} />
            }
            {
                showInsurance && <Insurance urlInsurance={urlInsurance} />
            }
            {
                showTechnicalReview && <TechnicalReview urlTechnicalReview={urlTechnicalReview} />
            }
            {
                showServiceBook && <ServiceBook urlServiceBook={urlServiceBook} />
            }
        </>
    )
};

export default Documents;