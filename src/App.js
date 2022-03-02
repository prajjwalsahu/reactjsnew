import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, { useState } from 'react';
import Alert from './Component/Alert';


 
function App()
 {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const[mode1,setred]=useState('red');
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
    const toggleMode1 = ()=>
    {
      if(mode1 === 'light'){
        setred('red');
        document.body.style.backgroundColor = '#ffcccb';
        showAlert("red mode has been enabled", "success");
        document.title = 'TextUtils - red Mode';
      }
      else{
        setred('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
        document.title = 'TextUtils - Light Mode';
      }
    }
  return(
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} mode1={mode1} toggleMode1={toggleMode1} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
    </div>
    </>
  );
}
export default App;