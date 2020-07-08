import React from 'react';
import Header from '../header/Header';
import Routes from '../routes/Routes';
import Home from '../home/Home';

const Template = () => (
  <div className="container">
    <Header />
    <Home/>
    <Routes />
  </div>
);

export default Template;
