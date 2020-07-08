import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-title">
                <h1>About</h1>
                <span className="st-border"></span>
              </div>
            </div>
            <div className="col-xs-12">
              <p>This is a cricket-based application. It features news, articles, and live coverage of cricket matches including videos, scorecards, text commentary, player stats, and team rankings. </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
