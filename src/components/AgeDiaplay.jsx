import React from "react";
import  style  from "./Age.module.css"

export function AgeDisplay(props){

    const {age} = props;

    return(
        <React.Fragment>
            <p className={style.box}>you are {age} years old</p>
        </React.Fragment>
    );

}