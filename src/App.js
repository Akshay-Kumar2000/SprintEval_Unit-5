// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import React, {Suspense, lazy} from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
     <Router>
       <Suspense fallback={
         <div>loading...</div>
       }>
         <Routes>
           <Route path="/" element={<Navbar />} />
           <Route path ="/Home" element = {<Home />} />
          </Routes>
        </Suspense>
      </Router>    
    </div>
  );
}

export default App;
