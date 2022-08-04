import React from 'react';
import Car from "./Car.jsx";

const CarList = ({cars, title}) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
            {cars.map((car) =>
                <Car car={car} key={car.url}/>
            )}
        </div>
    );
};

export default CarList;