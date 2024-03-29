import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Ipad from "./pages/ipad//Ipad"
import Iphone from "./pages/iphone/Iphone"
import Watch from "./pages/watch/Watch"
import Vision from "./pages/vision/Vision"
import Mac from "./pages/mac/Mac"
import {Routes , Route , Link} from "react-router-dom"

function App() {
  return (
    <div className="app">
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/store"}>Store</Link>
      <Link to={"/ipad"}>Ipad</Link>
      <Link to={"/iphone"}>Iphone</Link>
      <Link to={"/watch"}>Watch</Link>
      <Link to={"/vision"}>Vision</Link>
      <Link to={"/mac"}>Mac</Link> */}
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/store'element={<Store/>}/>
        <Route path='/ipad'element={<Ipad/>}/>
        <Route path='/iphone'element={<Iphone/>}/>
        <Route path='/watch'element={<Watch/>}/>
        <Route path='/./vision'element={<Vision/>}/>
        <Route path='/mac'element={<Mac/>}/>
      </Routes>
    </div>
  );
}

export default App;
