import React, {useState, useEffect} from 'react';

function Child(){

    const [seconds , setSeconds] = useState(0);

    useEffect(()=>{
        
        const intervalid = setInterval(()=>{
            setSeconds(prev=>prev+1)
        },1000);

        return()=>{
            console.log('clearInterval on unmount');
            clearInterval(intervalid);
        }
        
    },[]);

    return(<div>Time elapsed: {seconds} seconds</div>);

}

export default Child;