import logo from './logo.svg';
import './App.css';
import useState from './components/Usestate';
import Map from './components/Map';
import Arrays from './components/Arrays';
import UseEffects from './components/UseEffects';
import Boot from './components/Boot';
import Sampleaxios from './components/Sampleaxios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import HHome from './components/HHome';
import AArrays from './components/AArrays';

function App() {
  return (
    <div className="App">
      
      <Navbar/>

      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/Arrays' element={<Arrays/>}/>
      <Route path='/UseEffect' element={<UseEffects/>}/>
      <Route path='/Sampleaxios' element={<Sampleaxios/>}/>
      <Route path='/HHome' element={<HHome/>}/>
      <Route path='/AArrays' element={<AArrays/>}/>



      </Routes>
        

        

        
    
    </div>
  );
}

export default App;
