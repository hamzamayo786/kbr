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
import ContactUs from './component/Contact Us/contact';
import Investor from './component/investor/investor';
import PrivacyPolicy from './component/Policy/privacy-policy';
import Term_Condition from './component/Policy/term&condition';
import JoinTalentCommunity from './component/jobs-components/applyform';
import ScrollToTop from './layout/ScrollToTop';

function App() {
  
  return (
    <>
      <Header />
        <ScrollToTop/>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='what-we-do' element={<WhatWeDo />} />
          <Route path='suitable-tec' element={<SuitableTec />} />
          <Route path='careers' element={<Jobs />} />
          <Route path='who-we-are' element={<AboutUs />} />
          <Route path='/insights_news' element={<Blog />}>
          </Route>
          <Route path='blog-detail' element={<BlogDetail />} />
          <Route path='investor' element={<Investor />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='terms&conditions' element={<Term_Condition />} />
          <Route path='/jointalentcommunity/:id' element={<JoinTalentCommunity/>}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;