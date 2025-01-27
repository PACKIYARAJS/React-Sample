import ChildComponent from './ChildComponent'
function ParentComponent(){
    const handleChildClick = (message)=>{
        console.log(message);
        
    }

    return(
        <>
            <ChildComponent onButtonClick={handleChildClick}/>
        </>

    );

}
export default ParentComponent;