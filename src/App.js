import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Mac from "./pages/mac/Mac"
import Ipad from "./pages/ipad//Ipad"
import Iphone from "./pages/iphone/Iphone"
import Watch from "./pages/watch/Watch"
import Vision from "./pages/vision/Vision"
import {Routes , Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app">
  <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/store'element={<Store/>}/>
        <Route path='/mac'element={<Mac/>}/>
        <Route path='/ipad'element={<Ipad/>}/>
        <Route path='/iphone'element={<Iphone/>}/>
        <Route path='/watch'element={<Watch/>}/>
        <Route path='/vision'element={<Vision/>}/>
      </Routes>
    </div>
  );
}

export default App;
