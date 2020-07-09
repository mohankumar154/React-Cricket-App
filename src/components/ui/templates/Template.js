import React from 'react';
import Header from '../header/Header';
import Routes from '../routes/Routes';


const Template = () => (
  
  <div className="container">
    {console.log("mohanqq",window.location.pathname)}
    <Header />
    <Routes />
    
  
  </div>
  
 
);

export default Template;
