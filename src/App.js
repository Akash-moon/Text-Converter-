import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import Alert from './Components/Alert';
import React ,{ useState } from 'react';


function App() {
  const [mode,setMode] = useState('light'); // bootstrap ki className mei bydefault 'light' hota h isley
  const [alert,setAlert] = useState(null);// this is state for the elert

  const showalert = (msg,type)=>{
    // 4 type key alert hote hain go to watch on bootstrap
    setAlert({
      msg : msg,
      type: type
    })

    // 3 sec baad khud hi gayab ho jayee 
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }


  const toogle=()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor = '#042b55';
      // Jab hum dark  ode kareinge , tab ek msh deinge ki dark mode enabled 
      showalert("Dark Mode has been enabled","success");
      document.title = 'Text Converter-Dark Mode'

      // Har 1.4 sec mei shoe karega yeh 
      setInterval(()=>{
        document.title = 'Install U2L App Now';
        // for prormorton 
      },3000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been enabled","success");
      document.title = 'Text Converter-Light Mode'
    }
  }


  return (
    <>
        {/* I can use this Navbar again and again , cause this is compenents */}
        <Navbar title = "Text Manipulator" abouttext = "About" mode = {mode} toogle = {toogle}/>

        {/* Alert section  */}
        <Alert alert = {alert}/>


        {/* Here i added form making through bootstrap */}
        <div className="container my-3">
            <Textform heading = "Enter The Text To Analyze." showalert = {showalert} mode = {mode}/> 
        </div>

        {/* <Navbar/>  ---> yeh hai default balle ke liye */}  
        {/* <Check/> */}
    </>
  );
}

export default App;
