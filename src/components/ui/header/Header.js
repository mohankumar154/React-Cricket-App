import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/header.css';
import logo from '../../../logo.svg';

const Header = () => (
  <header id="header">
    <nav className="navbar st-navbar">
      <div className="container">
        <div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#st-navbar-collapse">
						<span className="sr-only">Toggle navigation</span>
				    	<span className="icon-bar"></span>
				    	<span className="icon-bar"></span>
				    	<span className="icon-bar"></span>
					</button>
					<Link to="/"><img src={"https://www.seekpng.com/png/detail/263-2631522_india-cricket-logo-west-indies-cricket-team.png"} className="App-logo" alt="Logo" /></Link>
				</div>
        <div className="collapse navbar-collapse" id="st-navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/" activeclassname="active">Home</Link></li>
            <li><Link to="/teams" activeclassname="active">Teams</Link></li>
            <li><Link to="/schedule" activeclassname="active">Schedule</Link></li>
            <li><Link to="/about" activeclassname="active">About Us</Link></li>
            </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
