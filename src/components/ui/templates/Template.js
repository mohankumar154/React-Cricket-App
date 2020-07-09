import React from 'react';
import Header from '../header/Header';
import Routes from '../routes/Routes';
import Home from '../home/Home';


const Template = () => (
  
  <div className="container">
    <Header />
    <Routes />
    {window.location.pathname=="/React-Cricket-App/" || window.location.pathname=="/React-Cricket-App"?
    <Home />
    :""}
  </div>
  
 
);

export default Template;
