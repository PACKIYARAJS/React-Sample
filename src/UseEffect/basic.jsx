import React,{ useEffect } from "react";

 export function BasicExampleComponent(){

    useEffect(()=>{

        console.log('component mounted');

    },[])

    return(
        <div>
            Check the console log!
        </div>
    );

 }