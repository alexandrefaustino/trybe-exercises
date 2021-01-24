import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  
  const [cars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
  });

  const [signal, setColor] = useState({ color: 'red' });

  const moveCar = (car, side) => {         
    setCars({
     ...cars, [car]: side,
    });    
  }; 

  const changeSignal = (signalColor) => {
    setColor({ color: signalColor });
  };

  return (
    <CarsContext.Provider value={{moveCar, cars, signal, changeSignal}}>
      {children}
    </CarsContext.Provider>
  );  
};

export default Provider;
