// import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform.js'
// import About from './Components/About';
import Alert from  './Components/Alert.js';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils - Dark Mode";
      // setInterval(()=>{
      //   document.title="TextUtls is amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title="Install TextUtls now";
      // },1500);
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils - Light  Mode";
    }
  }
  return (
    <>
        <Navbar title="Aniket" about="About"  mode={mode} toggleMode={toggleMode} ></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container my-3">
             <Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}></Textform>
             {/* <About></About> */}
        </div>
    </>
  );
}

export default App;
