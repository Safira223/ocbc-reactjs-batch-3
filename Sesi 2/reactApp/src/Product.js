import React from "react";

function Product(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.description}</h1>
        </div>
    );
}

export default Product;