
import React from "react";
import './style/header-footer.css'
const Header = () => {

    return (
        <>

            {/* <div class="preloader" id="preloader"></div> */}
            {/* <!--body-begins---> */}
            <div id="page" class="page-wrapper header-sticky position-fixed header-v1 hide-topbar-mobile header-sticky  w-100 top-0">
                
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img className="main-logo " src="../../../../assets/images/main-logo.png" alt="KBR team" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="what-we-do">What We Do</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="who-we-are">About US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="Careers">Careers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="insights$news">Insights & News</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="investor">Investor</a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="contact-us">Contact</a>
                                </li>
                            </ul>

                            <ul class="navbar-nav flex-row">

                                <li class="nav-item">
                                    <a class="nav-link pe-2" href="#!">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-2" href="#!">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-2" href="#!">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ps-2" href="#!">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>  

                {/* <!-- masthead end --> */}
            </div>
            
        </>
    )
}
export default Header;

