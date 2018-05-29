import React, { Component } from 'react';
import axios from 'axios';
import Search from './search';
import Results from './results';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = {
        restaurantName: "",
        streetNumber: "",
        streetName: "",
        stateName: "",
        zipCode: "",
        nycZipcode: "",
        nycAddress: "",
        yelp: null,
        nyc: null
      };
      this.handleChangeStreetNumber=this.handleChangeStreetNumber.bind(this);
      this.handleChangeStreetName=this.handleChangeStreetName.bind(this);
      this.handleChangeStateName=this.handleChangeStateName.bind(this);
      this.handleChangeZipCode=this.handleChangeZipCode.bind(this);
      this.handleSearchButton=this.handleSearchButton.bind(this);
      this.handleChangeRestaurantName=this.handleChangeRestaurantName.bind(this);
  };

  handleChangeRestaurantName (event) {
    this.setState({restaurantName: event.target.value});
  };

  handleChangeStreetNumber (event) {
    this.setState({streetNumber: event.target.value});
  };

  handleChangeStreetName (event) {
    this.setState({streetName: event.target.value});
  };

  handleChangeStateName (event) {
    this.setState({stateName: event.target.value});
  };

  handleChangeZipCode (event) {
    this.setState({zipCode: event.target.value});
  };

  handleSearchButton(event) {

      var streetNombre = this.state.streetName
      var streetNombre1 = streetNombre.replace(/ /g, "%20")
      var streetNombre2 = streetNombre1.replace(/'/g, "%27")
      console.log("streetNombre 2", streetNombre2)

      var estado = this.state.stateName
      var estado1 = estado.replace(/ /g, "%20")
      var estado2 = estado1.replace(/'/g, "%27")
      console.log("estado 2", estado2)

      var yelpAddress = [
        this.state.streetNumber,
        streetNombre2,
        "New York",
        estado2,
        this.state.zipCode
      ]
      var yelpAddress1 = yelpAddress.join("%20")
      console.log(yelpAddress1)

    //YELP API AXIOS CALL
    //------------------
    axios({
      method: 'get',
      url: `/api/${this.state.restaurantName}&location=${yelpAddress1}`})
    .then(response => {
      console.log("response", response)
      var newYelp = {
        image: response.data.businesses[0].image_url,
        name: response.data.businesses[0].name,
        categories: response.data.businesses[0].categories,
        location: response.data.businesses[0].location,
        phone: response.data.businesses[0].display_phone,
        rating: response.data.businesses[0].rating,
        reviewCount: response.data.businesses[0].review_count
      };
      this.setState({yelp: [newYelp]});

    //REFORMAT YELPS API ADDRESS & ZIPCODE TO USE IN THE NYC API
    //------------------------------------------------------------

      var addy = response.data.businesses[0].location.address1
      addy = addy.split(" ");
      addy = addy[0]
      console.log("addy", addy)
      this.setState({nycAddress: addy})

      var zippy = response.data.businesses[0].location.zip_code
      console.log("zippy", zippy)
      this.setState({nycZipcode: zippy})

      //CHANGE SEARCH TERM TO ALL UPPERCASE & NO SPACES OR APOSTROPHIES
      //--------------------------------------------------------------

      var restaurantNombre = this.state.restaurantName
      var restaurantNombre1 = restaurantNombre.toUpperCase()
      var restaurantNombre2 = restaurantNombre1.replace(/ /g, "%20")
      var restaurantNombre3 = restaurantNombre2.replace(/'/g, "%27")
      console.log(restaurantNombre3)

      //NYC API AXIOS CALL 
      //INSIDE THE .THEN OF THE YELP API AXIOS CALL
      //---------------------------------------------------------------
      
      axios({
        method: 'get',
        url: `https://data.cityofnewyork.us/resource/9w7m-hzhe.json?dba=${restaurantNombre3}&building=${this.state.nycAddress}&zipcode=${this.state.nycZipcode}`})
        .then(response => {
          if (!response.data[0]) {
            this.setState({nyc: null})
          } else {
            var newNyc = {
                grade: response.data[0].grade,
                gradeDate: response.data[0].grade_date,
                violations: response.data[0].violation_description
        };
        this.setState({nyc: [newNyc]});
          console.log(response)}
        })
        .catch((error) => console.log("!!nyc error!!", error))
    })
    .catch((error) => console.log("!!yelp error!!", error));

   
    
  };

  render() {
    return(
      <div className="container">
        <div className="jumbotron" id="title">
          <h1 className="display-4 text-center">NYC Restaurant Spot</h1>
          <h3 className="lead text-center">A Germaphobe's Guide to NYC Restaurants</h3>
        </div>
        <div className="row">
          <div className="col-4">
            <Search restaurantName={this.state.restaurantName}
                    streetNumber={this.state.streetNumber}
                    streetName={this.state.streetName}
                    stateName={this.state.stateName}
                    zipCode={this.state.zipCode}
                    nycCounter={this.state.nycCounter}
                    yelpCounter={this.state.yelpCounter}
                    yelp={this.state.yelp}
                    handleSearchButton={this.handleSearchButton}
                    handleChangeRestaurantName={this.handleChangeRestaurantName}
                    handleChangeStreetNumber={this.handleChangeStreetNumber}
                    handleChangeStreetName={this.handleChangeStreetName}
                    handleChangeStateName={this.handleChangeStateName}
                    handleChangeZipCode={this.handleChangeZipCode}/>
          </div>
          <div className="col-8">
            <div className="card border-danger">
              <div className="card-header border-danger">
                <h3 className="text-center">Results</h3>
              </div>
              <div className="card-body">
                <Results  restaurantName={this.state.restaurantName}
                          streetNumber={this.state.streetNumber}
                          streetName={this.state.streetName}
                          stateName={this.state.stateName}
                          zipCode={this.state.zipCode}
                          address={this.state.address}
                          yelpCounter={this.state.yelpCounter}
                          nycCounter={this.state.nycCounter}
                          nyc={this.state.nyc}
                          yelp={this.state.yelp}
                          handleSearchButton={this.handleSearchButton}
                          handleChangeRestaurantName={this.handleChangeRestaurantName}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default App;