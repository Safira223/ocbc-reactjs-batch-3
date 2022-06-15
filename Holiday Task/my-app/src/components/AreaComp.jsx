import React from "react";
import "./AreaComp.css";

const Area = (props) => {
    return (
        <div className="area-wrapper">
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">{props.area}</p>
            </div>  
        </div>
    )
}

export default Area;