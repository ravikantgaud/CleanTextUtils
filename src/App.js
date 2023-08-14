import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import Alert from './Components/Alert'
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(37 72 123)';
      showAlert('Dark mode has been unabled', 'Success');
    } 
    else if(mode === 'yellow'){
      setMode('yellow')
      document.body.style.backgroundColor = 'yellow';
      showAlert('Yellow mode has been unabled', 'Success');
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been unabled', 'Success');
    }
  }
  const changeYellow = () => {
    document.body.style.backgroundColor = 'yellow';
    showAlert('Theme set to Yellow', 'Success');
  }
  const changeGreen = () => {
    document.body.style.backgroundColor = 'Green';
    showAlert('Theme set to Green', 'Success');
  }
  const changeCyan = () => {
    document.body.style.backgroundColor = 'Cyan';
    showAlert('Theme set to Cyan', 'Success');
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(function(){
      setAlert(null);
    },1500)
  }
  return (
    <>
      {/* <Navbar title='TextUtils' aboutText='About Us' /> */}
      {/* <Navbar title={5} aboutText='About Us' /> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title='TextUtils' aboutText='About Us' mode={mode} toggleMode={toggleMode} changeYellow={changeYellow} changeGreen={changeGreen} changeCyan={changeCyan}  />
        <Alert alert={alert} />
        <Routes>
          {/* /users --> Component 1
          /users/home --> Component 2 */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm heading='Enter the text to analyze below' mode={mode} toggleMode={toggleMode} showAlert={showAlert}  />} />
        </Routes>
      </Router>
        
    </>
  );
}

export default App;
