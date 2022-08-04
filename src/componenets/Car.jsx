import React from 'react';

const Car = (props) => {
    return (
        <div  className="post">
            <p><img src={props.car.img} alt="car image"/></p>
            <div>
                <h1>{props.car.name}</h1>
                <i>{props.car.other}</i>
            </div>
        </div>
    );
};

export default Car;