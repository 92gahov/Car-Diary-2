import React from 'react';
import Documents from '../Documents';
import CarName from '../CarName';
import Notice from '../Notice';

const CarOne = () => {

    const urlCarName = "http://localhost:3001/car_one_name";
    const urlVehicleTax = "http://localhost:3001/car_one_vehicle_tax";
    const urlTollTax = "http://localhost:3001/car_one_toll_tax";
    const urlInsurance = "http://localhost:3001/car_one_insurance";
    const urlTechnicalReview = "http://localhost:3001/car_one_technical_review";
    const urlServiceBook = "http://localhost:3001/car_one_service_book";

    return (
        <>
            <CarName urlCarName={urlCarName} />
            <Documents urlVehicleTax={urlVehicleTax}
                urlTollTax={urlTollTax}
                urlInsurance={urlInsurance}
                urlTechnicalReview={urlTechnicalReview}
                urlServiceBook={urlServiceBook} />
            <Notice urlVehicleTax={urlVehicleTax}
                urlTollTax={urlTollTax}
                urlInsurance={urlInsurance}
                urlTechnicalReview={urlTechnicalReview} />
        </>
    )
};

export default CarOne;