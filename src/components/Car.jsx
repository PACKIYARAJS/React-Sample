const Car = (props)=>{
    console.log(props);
    const {car} = props;
    const {color, brand} = car;
    const text = `Hey! Im a ${color} ${brand} car`
    return(
        <>
            <h2>{text}</h2>
        </>
    );

}
export default Car;