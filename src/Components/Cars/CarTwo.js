import React from 'react';
import CarName from '../CarName';
import Documents from '../Documents';
import Notice from '../Notice';

const CarTwo = () => {

    const urlCarName = "http://localhost:3001/car_two_name";
    const urlVehicleTax = "http://localhost:3001/car_two_vehicle_tax";
    const urlTollTax = "http://localhost:3001/car_two_toll_tax";
    const urlInsurance = "http://localhost:3001/car_two_insurance";
    const urlTechnicalReview = "http://localhost:3001/car_two_technical_review";
    const urlServiceBook = "http://localhost:3001/car_two_service_book";

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

export default CarTwo;