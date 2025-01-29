import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Garage from './components/Garage'
import reportWebVitals from './reportWebVitals';
import { AgeCounter } from './components/AgeCounter';
import ParentComponent from './components/ParentComponent'
import { BasicExampleComponent } from './UseEffect/basic';
import { ExampleComponent } from './UseEffect/dependency'
import { Times } from './UseEffect/SetTimeInterval'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <h1 className='App'>Welcome</h1>
    {/* <App /> */}
    {/* <Garage /> */}
    {/* <AgeCounter/> */}
    {/* <ParentComponent /> */}
    {/* <BasicExampleComponent />
    <ExampleComponent/> */}
    <Times/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
