import React,{useState, useEffect} from 'react';
import Child from './child'

export function Times(){

const [isMount, setIsMount] = useState(true);

useEffect(()=>{
    setTimeout(()=>{
        setIsMount(false);
    },10000)
},[])

useEffect(()=>{
    setTimeout(()=>{
        setIsMount(true);
    },5000)
},[!isMount])

    if(isMount){
        return(
            <Child/>
        );
    }else{
        return('component unmounted');
    }

}