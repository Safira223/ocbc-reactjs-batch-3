import React from "react";
import "./CountryComp.css";

const Population = (props) => {
    return (    
        <div className="country-wrapper">
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">{props.population}
                <br />people</p>
            </div>  
        </div>
    )
}

export default Population;