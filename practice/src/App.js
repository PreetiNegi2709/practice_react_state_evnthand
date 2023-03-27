import './App.css';
import UsrInput from './components/UsrInput' ;
import DataDisplay from './components/DataDisplay' ;
import { forwardRef, useState } from 'react';

function App() {
  // const disp = {};

  // const [display,setDisplay]= useState(disp);
  const [display,setDisplay]= useState([]);

  const userDataHandler = (data) =>{
    // console.log(data);
    // setDisplay((prevState)=>{
    //   return ([...prevState,data])
    // })
    setDisplay([...display,data]);
  }
  console.log(display);
  return (
    <div className="appBody">
      <h1>Enter Data</h1>
      <UsrInput onUserData={userDataHandler}/>
      {/* just display won't work cause in js its defined although its empty */}
      {display.length>0 && <DataDisplay data={display}/> }
    </div>
  );
}

export default App;
