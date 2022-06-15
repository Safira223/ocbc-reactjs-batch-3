import React, {Component} from "react";
import AreaComp from "../../components/AreaComp";
import CountryComp from "../../components/CountryComp";


class Country extends Component {
    render() {
        return (
            <div>
                <center><h1>Fun Fact</h1></center>
                <center><h2 className="text-center">Three Most Populated Countries</h2></center>
                <center>
                    <CountryComp 
                    name="China"
                    population="1403500365"/>
                    <CountryComp 
                    name="India"
                    population="1352642280"/>
                    <CountryComp 
                    name="United States"
                    population="331893745"/>
                </center>
                
                <br />
                <center><h2 className="text-center">Three Largest Area Countries</h2></center>
                <center>
                    <AreaComp
                    name="Russia"
                    area="17098246" />
                    <AreaComp
                    name="Canada"
                    area="9984670" />
                    <AreaComp
                    name="China"
                    area="9596961" />
                </center>  
            </div>
        )
    }
}

export default Country;