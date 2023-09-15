import logo from './logo.svg';
// here app.css import here 
import './App.css';
import Navbar from './Components/Navbar';
import Check from './Components/Check';
let name = "Akash";



function App() {
  return (
    <>
      {/* I can use this Navbar again and again , cause this is compenents */}
      <Navbar title = "G20 TextUtils" abouttext = "About" />

      
      {/* <Navbar/>  ---> yeh hai default balle ke liye */}  
      <Check/>
    </>
  );
}

export default App;
