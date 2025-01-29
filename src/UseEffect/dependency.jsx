import React,{useState, useEffect} from 'react';

export function ExampleComponent(){

    const [count, setCount] = useState(0);

    function Increase(){

        setCount(count + 1);

    }

    useEffect(()=>{
            console.log(`The count has changed to ${count}`);
    },[count])

    return(

        <>
            <div>count : {count}</div>
            <button className='btn btn-primary' onClick={Increase}>+</button>
        </>

    );

}