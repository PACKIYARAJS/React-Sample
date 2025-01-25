import React from 'react'
import Car from './Car'
function Garage(){

    // const brand = 'fort'
    const car = {brand: 'Ferrari', color : 'red'}

    return( 
        <React.Fragment>
        <h1>Who is live in my garage?</h1>
        <Car car ={car} />
        </React.Fragment>
    );

}
export default Garage;