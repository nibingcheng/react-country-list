import React, { Component } from 'react';
import Country from "./Country";

class CountryList extends Component {
    // constructor(props) {
    //     super(props)
        
    //     this.state = {
    //         countries: this.props.countries
    //     }
        
    // }
  
    render() {
        console.log("CountryList:", this.props.countries);
        let list = [];
        const countryList = this.props.countries.map((country,index)=>
            list.push(<Country name={country.name} key={index}/>)
        )

        return (
            <div className='countryList'>
                <h1>CountryList</h1>
                {list}

            </div>
        )
    }
}

export default CountryList;