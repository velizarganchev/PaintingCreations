import { Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navi from './components/Navi';
import Dashboard from './components/Dashboard';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Routes>
        <Route path='/*' element={<Dashboard />}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
