
import React from "react";
import './style/header-footer.css'
import { Link } from "react-router-dom";
const Header = () => {

    return (
        <>


            {/* <!--body-begins---> */}
            <div id="page" class="page-wrapper header-sticky position-fixed header-v1 hide-topbar-mobile header-sticky  w-100 top-0">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <Link to="/" class="navbar-brand">
                            <img className="main-logo " src="../../../../assets/images/main-logo.png" alt="KBR team" />
                        </Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="what-we-do">What We Do</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="who-we-are">About US</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="careers">Careers</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="insights_news">Insights & News</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="investor">Investor</Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to="contact-us">Contact</Link>
                                </li>
                            </ul>

                            <ul class="navbar-nav flex-row">

                                <li class="nav-item">
                                    <Link class="nav-link pe-2" to="#!">
                                        <i class="fab fa-youtube"></i>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link px-2" to="#!">
                                        <i class="fab fa-facebook-f"></i>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link px-2" to="#!">
                                        <i class="fab fa-twitter"></i>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link ps-2" to="#!">
                                        <i class="fab fa-instagram"></i>
                                    </Link>
                                </li>
                                <div className="offcanvas-btn d-flex flex-column ">
                                    <button class="btn btn-primary rounded-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
                                        <p href="" className=" fs-4 ">&#x2630;</p>
                                    </button>
                                    
                                </div>
                                {/* <!-- Button trigger for off-canvas sidebar --> */}

                            </ul>
                        </div>
                    </div>
                </nav>


                {/* <!-- Off-canvas sidebar --> */}
                <div class="offcanvas offcanvas-end" tabindex="-1" id="sidebar" aria-labelledby="sidebarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="sidebarLabel">Menu</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        {/* <!-- Add your navigation links here --> */}
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><Link to="who-we-are" class="nav-link active" aria-current="page">Who We Are</Link></li>
                            <li class="nav-item mb-2"><Link to="what-we-do" class="nav-link">What We Do</Link></li>
                            <li class="nav-item mb-2"><Link to="careers" class="nav-link">Careers</Link></li>
                            <li class="nav-item mb-2"><Link to="insights_news" class="nav-link">Insights & News</Link></li>
                            <li class="nav-item mb-2"><Link to="investor" class="nav-link">Investor Relations</Link></li>

                            <li class="nav-item mb-2"> <div class="accordion" id="accordionExample">

                                <div class="accordion-item border-0">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse border-0" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <li class="nav-item mb-2"><Link to="#" class="nav-link">Investor Relations</Link></li>

                                        </div>
                                    </div>
                                </div>

                            </div></li>

                        </ul>
                    </div>
                </div>

                {/* <!-- masthead end --> */}
            </div>


        </>
    )
}
export default Header;

