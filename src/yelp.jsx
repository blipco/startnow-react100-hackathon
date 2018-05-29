import React, { Component } from 'react';

class Yelp extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return(
      <div>
        <img src={this.props.restaurant.image} width="200" height="120"/>
        <div className="card border-right-0 border-left-0 border-top-0">
          <h4>{this.props.restaurant.name}</h4> 
        </div>
        <div className="card border-right-0 border-left-0">
          <div className="font-weight-bold">
            Category:
          </div>
          <div>
            {this.props.restaurant.categories[0].title}, {this.props.restaurant.categories[1].title}
          </div>
        </div>
        <div className="card border-right-0 border-left-0">
          <div className="font-weight-bold">
            Address:<br/>
          </div>
          <div>
          {this.props.restaurant.location.display_address[0]} <br/>
          {this.props.restaurant.location.display_address[1]} <br/>
          </div>
        </div>
        <div className="card border-right-0 border-left-0">
          <div className="font-weight-bold">
            Phone Number:<br/>
          </div>
          <div>
            {this.props.restaurant.phone} <br/>
          </div>
        </div>
        <div className="card border-right-0 border-left-0">
          <div className="font-weight-bold">
            Yelp Star Rating:<br/>
          </div>
          <div>
          {this.props.restaurant.rating} <br/>
          </div>
        </div>
        <div className="card border-right-0 border-left-0">
          <div className="font-weight-bold">
            Review Count:
          </div>
          <div>
            {this.props.restaurant.reviewCount}
          </div>
        </div>
      </div>
    )
  }
};

export default Yelp;