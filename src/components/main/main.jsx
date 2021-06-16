import React from 'react';

import CarOffer from '../car-offer/car-offer';

const Main = () => {
  return (
    <main className="page__main">
      <h1 className="visually-hidden">Avto-Moto - страница выбора автомобиля</h1>
      <CarOffer />
    </main>
  );
};

export default Main;
