import React from 'react';
import Header from '../header/Header';
import Routes from '../routes/Routes';


const Template = () => (
  
  <div className="container">
    <Header />
    <Routes />
    {console.log("mohan",Location.pathname)}
  
  </div>
  
 
);

export default Template;
