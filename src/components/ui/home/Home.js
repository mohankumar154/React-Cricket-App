import React, { Component } from 'react';
import NewsDetails from './NewsDetails'
import axios from 'axios'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newsPlayer: 1
    }
  }

  componentDidMount() {
    this.getNewsData();
  }

  getNewsData() {
    axios.get("%PUBLIC_URL%/newslist.json").then(response => {
      this.setState({newsList: response})
    })
  };
  render() {


    if (!this.state.newsList)
    return (<p>Loading data</p>)
    return (
      <React.Fragment>
      <div className="jumbotron">
        <h2>Cricket World Cup</h2>
        <p>World top teams</p>
      </div>
      <div className="addmargin">
      <div className="col-md-4">
        <h2>LATEST NEWS</h2>
        {
          this.state.newsList.data.map(customer => <div key={customer.name} className="centeralign">
            <div className="latestmenu" onClick={() => this.setState({newsPlayer: customer.id})}>
            <p>{customer.name}</p>
            <p>{customer.date}</p>
              <button type="button" className="btn btn-primary">
                Click to View Details
              </button><br/>
            </div>
          </div>)
        }
        
      </div>
      <div className="col-md-8">
        <NewsDetails val={this.state.newsPlayer}/> 
      </div>
    </div>
      </React.Fragment>
    );
  }
}
export default Home;
