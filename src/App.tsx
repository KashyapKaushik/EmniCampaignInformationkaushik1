import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Loginpage from "./components/LoginPage/Loginpage";
import Homepage from './components/Homepage/Homepage';
import Signuppage from './components/Signuppage/Signuppage';



function App() {
  return (
    <>
      


    <Router>
      <div className='container'> 
      <Routes>
        <Route path='/' element={<Loginpage/>} /> 
        <Route path='/home' element={<Homepage/>} />
         <Route path='/sign' element={<Signuppage />} /> 
          

      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
