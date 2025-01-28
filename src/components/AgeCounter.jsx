import { useState } from "react";
import { AgeDisplay } from "./AgeDiaplay";
import "./global.css"

export function AgeCounter(){

    const [Age, setAge] = useState(20);

    function increaseAge()
    {
        setAge(Age+1);
    }

    function testAge(data)
    {
        console.log("parent data :"+data);
    }

    console.log("Re-rendering")

    return(
        <>
            <h2 className="box" style={{backgroundColor : '', border: 'solid 2px black'}}>You are {Age} years old</h2>
            <button onClick={increaseAge}>Increase Age</button>
            <AgeDisplay age={Age} btnclick={testAge} />
        </>
    );
}