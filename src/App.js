
import './App.css';
// import PreNavBar from "./components/NavbarComponent/preNavBar";
import Navbar from "./components/NavbarComponent/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Slider from "./components/Slider.js"
import banner from "./data/data.json"
function App() {
  return (

    <Router>
      {/* <PreNavBar/> */}
      <Navbar/>
<Slider start={banner.start}/>
    </Router>
  );
}
export default App;
