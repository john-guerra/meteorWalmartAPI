import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import Result from "./Result"
// App component - represents the whole app
export class App extends Component {

  constructor(props) {
    super(props);
  }

  getWalmartResults(event) {
    let key= event.keyCode || event.which;
    if(key !== 13){
        console.log("I'll only query on enter");
        return;
    }

    console.log("searching...");
    Meteor.call("walmart.search", event.target.value, (err, res) => {
      if (err) { console.log(err); }

      console.log("made it!");
      console.log(res);
      this.setState({walmartResults: res});
    });
  }

  renderResults() {
    if (this.state && this.state.walmartResults) {
      return this.state.walmartResults.items.map((res) => {
          return (<Result key={res.itemId} result={res}/>)
        });
    } else {
      return <div></div>
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyPress={this.getWalmartResults.bind(this)} placeholder="search Walmart" aria-label="search Walmart"/>
        <div>Results:</div>

          <div>
            {this.renderResults()}
          </div>
      </div>
    );
  }
}

export default AppContainer = createContainer( (params)=> {
  return {
  };
}, App)