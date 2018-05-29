import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return(
      <div className="card d-flex height border-danger">
        <div className="card-header d-flex justify-content-center border-danger">
          <h3>Restaurant Search</h3>
        </div>
        <div className="card-body m-0 p-0 border-danger">
          <input className="search border-top-0 border-right-0 border-left-0 p-2" value={this.props.restaurantName} onChange={this.props.handleChangeRestaurantName} placeholder="**Restaurant Name"></input><br/>
          <input className="streetNumber border-top-0 border-right-0 border-left-0 p-2" value={this.props.streetNumber} onChange={this.props.handleChangeStreetNumber} placeholder="Street #"></input><br/>
          <input className="streetName border-top-0 border-right-0 border-left-0 p-2" value={this.props.streetName} onChange={this.props.handleChangeStreetName} placeholder="Street"></input><br/>
          <input className="city border-top-0 border-right-0 border-left-0 p-2" value="NEW YORK" readOnly></input><br/>
          <input className="stateName border-top-0 border-right-0 border-left-0 p-2" value={this.props.stateName} onChange={this.props.handleChangeStateName} placeholder="State"></input><br/>
          <input className="zipCode border-top-0 border-right-0 border-left-0 p-2" value={this.props.zipCode} onChange={this.props.handleChangeZipCode} placeholder="Zip Code"></input>
        </div>
        <div className="card-footer border-danger">
        <div className="row">
          <p>** Required</p><br/>
        </div>
        <div className="row">
          <button className="btn btn-block border-danger" onClick={this.props.handleSearchButton}>CLICK ME</button>
        </div>
        </div>
      </div>
    )
  };
};

export default Search;