import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App component - represents the whole app
export class App extends Component {

  render() {
    return (
      <div>
        <div>Walmart results:</div>
        { /* If we get data display it, otherwise show "" */ }
        <div>{this.props.walmartResults ?
          JSON.stringify(this.props.walmartResults) :
          ""
        }</div>
      </div>
    );
  }
}

App.propTypes = {
  walmartResults : PropTypes.object
}

export default AppContainer = createContainer( (params)=> {
  console.log("calling walmart");
  Meteor.call("walmart.search", "ipod", (err, res) => {
    if (err) { console.log(err); }

    console.log("made it!");
    console.log(res);
    return {
      walmartResults: res,
    }
  });

  return {
    walmartResults: {},
  };
}, App)