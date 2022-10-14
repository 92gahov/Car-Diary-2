import React from 'react';
import CarName from '../CarName';
import Documents from '../Documents';
import Notice from '../Notice';

const CarThree = () => {

    const urlCarName = "http://localhost:3001/car_three_name";
    const urlVehicleTax = "http://localhost:3001/car_three_vehicle_tax";
    const urlTollTax = "http://localhost:3001/car_three_toll_tax";
    const urlInsurance = "http://localhost:3001/car_three_insurance";
    const urlTechnicalReview = "http://localhost:3001/car_three_technical_review";
    const urlServiceBook = "http://localhost:3001/car_three_service_book";

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

export default CarThree;