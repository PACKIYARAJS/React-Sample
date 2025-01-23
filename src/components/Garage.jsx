import React from "react";
import Car from "./Car"
function Garage(){

    return(
        <React.Fragment>
        <h1>  Welcome! </h1>
        <h1>Who is live in my garage?</h1>
        <Car text='Hey! im car'/>
        </React.Fragment>
    );

}

export default Garage;