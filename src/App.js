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
import Jobs from './component/jobs-components/jobs-page';
import Blog from './component/Blog/blog';
import BlogDetail from './component/Blog/blog-detail';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='what-we-do' element={<WhatWeDo />} />
        <Route path='suitable-tec' element={<SuitableTec />} />
        <Route path='Careers' element={<Jobs />} />
        <Route path='who-we-are' element={<AboutUs />} />
<<<<<<< HEAD
        <Route path='insights&news' element={<Blog />} />
=======
<<<<<<< HEAD
        <Route path='insights$news' element={<Blog />}>
          <Route path='' element={<Navigate to='BlogDetail' />} />
          <Route path='BlogDetail' element={BlogDetail} />
        </Route>
=======
        <Route path='insights&news' element={<insights&news />} />
>>>>>>> 4786af68d0d3f5b239ccaaf94e743880db50239f
>>>>>>> 1e732c87157d88952c5a6f531079a3dd0920e2cd
      </Routes>
      <Footer />
    </>
  );
}

export default App;
