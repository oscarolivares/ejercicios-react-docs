import React from 'react';
import logo from './logo.svg';
import './App.css';

import TemperatureCalculator from './components/TemperatureCalculator';
import FilterableProductTable from './components/FilterableProductTable';

const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5'
  },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

function App() {
  return (
    <div>
      {/* <TemperatureCalculator /> */}
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
