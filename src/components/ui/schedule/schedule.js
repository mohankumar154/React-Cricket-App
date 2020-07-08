import React, { Component } from 'react';
import axios from 'axios';

class Schedule extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }
  componentDidMount() {
    this.getNewslistData();
  }

  getNewslistData() {
    axios.get("%PUBLIC_URL%/matchlist.json").then(response => {
      this.setState({customerList: response})
    })
  };
  render() {
    if (!this.state.customerList)
    return (<p>Loading data</p>)
    return (
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="section-title">
                <h1>Cricket Schedule</h1>
                <span className="st-border"></span>
              </div>
            </div>

           {this.state.customerList.data.map((customer,index) => <div className="col-xs-12">
           <div key={index}>
             <h3>{customer.date}</h3>
           <div className="col-xs-12 col-md-3"><strong>{customer.league}</strong></div>
           <div className="col-xs-12 col-md-3">{customer.match}</div>
           <div className="col-xs-12 col-md-3">{customer.time}</div>
          </div>
          </div>)
  }
          </div>
        </div>
      </section>
    );
  }
}

export default Schedule;
