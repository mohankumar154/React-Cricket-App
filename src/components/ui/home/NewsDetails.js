import React, {Component} from 'react';
import axios from 'axios'

export default class NewsDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.getNewsDetails(this.props.val)
  }

  componentDidUpdate(prevProps) {
    if (this.props.val !== prevProps.val) {
      this.getNewsDetails(this.props.val)
    }
  }

  getNewsDetails(id) {
    console.log("a",id)
    axios.get(id===1 ? "https://json.extendsclass.com/bin/524f80b45aeb" : id===2 ? "https://json.extendsclass.com/bin/77000100ae38":"https://json.extendsclass.com/bin/5da0d45f304b").then(response => {
      this.setState({newsDetails: response})
    })
  };

  render() {
    if (!this.state.newsDetails)
      return (<p>Loading Data</p>)
    return (<div className="newsDetails">
      <div>
        <h3>
          <p>{this.state.newsDetails.data.name}</p>
        </h3>
        
          <p><img src={this.state.newsDetails.data.email}></img></p>
          <p>{this.state.newsDetails.data.content}</p>
       
      </div>
    </div>)
  }
}
