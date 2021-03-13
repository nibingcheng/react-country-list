import React, { Component } from "react";
import axios from "axios";
import "./App.css";
// import Country from "./Country";
import CountryList from "./CountryList";

class App extends Component {
  constructor() {
    super()

    this.state = {
      countries: []
    }
  }
  componentDidMount = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      this.setState ({
        countries: response.data
      });      
    })
  }

  render() {
    console.log("App:", this.state.countries.length);
    return (
      <div className="App">
        <h1>Countries of the World</h1>
        <CountryList countries={this.state.countries}/>
      </div>
    );
  }
}

export default App;
