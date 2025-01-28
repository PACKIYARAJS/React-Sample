import React from "react";
import { useState } from "react";
import  style  from "./Age.module.css"

export function AgeDisplay(props){

    const {age} = props;
    const [data, setData] = useState('test');
    const getValue =(a)=>{

        // console.log(a.target.value);

        setData(a.target.value);

    }

    return(
        <React.Fragment>
            <p className={style.box}>you are {age} years old</p>
            <button onClick={()=>props.btnclick(data)}>Click</button>
            <input type="text" value={data} onChange={(e)=>getValue(e)}/>
        </React.Fragment>
    );

}