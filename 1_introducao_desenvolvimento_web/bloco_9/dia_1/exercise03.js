const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  const waitingTime = 4000;
  setTimeout(() => console.log("Returned planet: ", mars), waitingTime);
};

getPlanet(); // imprime Marte depois de 4 segundos