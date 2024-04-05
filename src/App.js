import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes, Navigate } from 'react-router-dom';


import Header from './layout/header';
import Footer from './layout/footer';
import Home from './component/home/home';
import WhatWeDo from './component/what-we-do/what-we-do';
import SuitableTec from './component/what-we-do/suitable-tec';
import AboutUs from './component/aboutus/aboutUs';


function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='what-we-do' element={<WhatWeDo />} />
        <Route path='suitable-tec' element={<SuitableTec />} />
        <Route path='who-we-are' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
