import React, { Component } from 'react';

class Nyc extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return(
      <div>
        <div className="card border-top-0 border-right-0 border-left-0">
        <div className="font-weight-bold">
          Grade: <br/>
        </div>
          {!this.props.spot.grade ? "No Grade on Record" : this.props.spot.grade} <br/>
        </div>
        <div className="card border-right-0 border-left-0">
        <div className="font-weight-bold">
          Grade Date: <br/>
        </div>
        {!this.props.spot.gradeDate ? "No Grade Date on Record" : this.props.spot.gradeDate} <br/>
        </div>
        <div className="card border-right-0 border-left-0">
        <div className="font-weight-bold">
          Violations were cited in the following area(s):<br/>
        </div>
        {!this.props.spot.violations ? "No Violations on Record" : this.props.spot.violations} <br/>
        </div>
        </div>
    )
  };
};

export default Nyc;