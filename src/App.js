import { Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navi, Dashboard, Gallery, Footer, ContactUs } from './components';

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path='/*' element={<Dashboard />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact-us' element={<ContactUs
          ServiceId={process.env.REACT_APP_YOUR_SERVICE_ID}
          TemplateId={process.env.REACT_APP_YOUR_TEMPLATE_ID}
          PublicKey={process.env.REACT_APP_YOUR_PUBLIC_KEY} />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
