function ChildComponent({onButtonClick}){

    return(
        <>
        <button onClick={()=>{onButtonClick('Hello from Child')}}>Message</button>
        </>
    );

}
export default ChildComponent;