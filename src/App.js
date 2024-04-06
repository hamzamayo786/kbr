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
<<<<<<< HEAD
import Investor from './component/investor/investor';
=======
import ContactUs from './component/Contact Us/contact';
>>>>>>> 65b66ff7d57bda44841697904b677b9aa0d36e61

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='what-we-do' element={<WhatWeDo />} />
        <Route path='suitable-tec' element={<SuitableTec />} />
        <Route path='careers' element={<Jobs />} />
        <Route path='who-we-are' element={<AboutUs />} />
        <Route path='insights$news' element={<Blog />}>
<<<<<<< HEAD
          <Route path='' element={<Navigate to='BlogDetail' />} />
          <Route path='BlogDetail' element={BlogDetail} />          
        </Route>
        <Route path='investor' element={<Investor/>} />

=======
          <Route path='' element={<Navigate to='blogDetail' />} />
          <Route path='blogDetail' element={<BlogDetail />} />
        </Route>
        <Route path='' element={<ContactUs />} />
>>>>>>> 65b66ff7d57bda44841697904b677b9aa0d36e61
      </Routes>
      <Footer />
    </>
  );
}

export default App;