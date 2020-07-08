import React from 'react';
import Header from '../header/Header';
import Routes from '../routes/Routes';
import Home from '../home/Home';

const Template = () => (
  <React.Fragment>
  <div className="container">
    <Header />
    <Routes />
    <Home/>
  </div>
  
  </React.Fragment>
);

export default Template;
