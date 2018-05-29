import React, { Component } from 'react';
import Yelp from './yelp';
import Nyc from './nyc';

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    if(!this.props.yelp) {
      return(
          <p className="text-center"> 
            Type in a New York City Restaurant name to get started!<br/>
            For Example: Denny's, Dunkin Donuts, Applebee's<br/>
          </p>
      );
    } else {
        return(
          <div className="row">
            <div className="col-4">
              {this.props.yelp && this.props.yelp.map(restaurant => (
              <Yelp key={this.props.yelpCounter}
                    address={this.props.address}
                    restaurant={restaurant}
                    restaurantName={this.props.restaurantName}
                    yelp={this.props.yelp}
                    handleSearchButton={this.handleSearchButton}
                    handleChangeRestaurantName={this.handleChangeRestaurantName}/>
              ))}
            </div>
            <div className="col-8">
              {this.props.nyc && this.props.nyc.map(spot => (
                <Nyc  key={this.props.nycCounter}
                      address={this.props.address}
                      nyc={this.props.nyc}
                      spot={spot}
                      search={this.props.restaurantName}
                      handleSearchButton={this.props.handleSearchButton}
                      handleChangeRestaurantName={this.props.handleChangeRestaurantName}/>
              ))}
            </div>
          </div>
        );
      };
    };
};

export default Results;