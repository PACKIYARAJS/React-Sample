function Child(props){
    // console.log(props);
    const {lastname , age , bike , car , Array , img} = props; 
    const {brand , color} = bike;
    // if(age>50){
    //     return(<div>You are old</div>);
    // }
    // else{
    //     return(<div>You are young</div>);
    // }
    return(
        <>
        <h3>Hi I'm {props.firstname} {lastname} {age} years old.</h3>
        <h4>My favorite bike is {brand} in {color} color.</h4>
        <h4>My favorite car is {car.brand} in {car.color} color.</h4>
        <p>{Array[4]}</p>
        <button onClick={props.something}>click me </button><br/><br/>
        <img src={img} alt="Img"/>
        </>
    );
    
}
export default Child;