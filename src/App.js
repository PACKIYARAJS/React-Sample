import logo from './logo.svg';
import './App.css';
import Child from './components/Child';

function App() {
  const firstname = 'Packiyaraj';
  const bike ={brand : 'TVS Apache RTR 160 4v' , color : 'Grey'};

  return (
    <div className="App">
      <Child firstname = {firstname}  lastname={'S'} age = '22'
            car= {{brand : 'Crysta' , color : 'White' }} 
            bike = {bike} Array = {[1,2,3,4,5]}
            something = {()=>{
                              console.log('Raj');
                          }}
            img = {<img src = 'https://picsum.photos/seed/picsum/200/300'/>}
             />
    </div>
  );
}

export default App;
