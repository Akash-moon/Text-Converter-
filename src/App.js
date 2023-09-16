import logo from './logo.svg';
// here app.css import here 
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
let name = "Akash";



function App() {
  return (
    <>
      {/* I can use this Navbar again and again , cause this is compen
      ents */}
      <Navbar title = "U2L Converter3" abouttext = "About" />

      {/* Here i added form making through bootstrap */}
      <div className="container my-3">
          <Textform heading = "Enter The Text To Analyze."/>
      </div>

      {/* <Navbar/>  ---> yeh hai default balle ke liye */}  
      {/* <Check/> */}
    </>
  );
}

export default App;
