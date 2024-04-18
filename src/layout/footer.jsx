import React from "react";
import './style/header-footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="footer text-center text-lg-start text-white">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </Link>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </Link>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </Link>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </Link>
                        <Link to="" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </Link>
                    </div>

                </section>
                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <div className="footer-branding">
                                <Link to="/" class="text-reset">
                                         <img className="main-logo " src="../../../../assets/images/main-logo.png" alt="KBR team" />

                                </Link>
                                </div>
                                <h6 class="text-uppercase fw-bold mb-4">

                                    <i class="fas fa-gem me-3"></i>
                                    Appointed Wordwide Holdings, LLC

                                </h6>
                                <p>
                                    APPOINTED WORLDWIDE HOLDINGS, LLC appears to be a private limited liability company that may engage in a variety of business activities globally.
                                </p>
                            </div>

                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">

                                </h6>
                                <p>
                                    <Link to="/" class="text-reset">Home</Link>
                                </p>
                                <p>
                                    <Link to="/what-we-do" class="text-reset">What WE DO</Link>
                                </p>
                                <p>
                                    <Link to="/who-we-are" class="text-reset">About US</Link>
                                </p>
                                <p>
                                    <Link to="/careers" class="text-reset">Careers</Link>
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">

                                </h6>
                                <p>
                                    <Link to="insights_news" class="text-reset">Insights & News</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Investor</Link>
                                </p>
                                <p>
                                    <Link to="contact-us" class="text-reset">Contact Us</Link>
                                </p>
                                <p>
                                    <Link to="privacy-policy" class="text-reset">Privacy Policy</Link>
                                </p>
                                <p>
                                    <Link to="terms&conditions" class="text-reset">Terms And Conditions</Link>
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>
                    </div>
                </section>



                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2024 Copyright :
                    <Link className="text-reset fw-bold" to=""> AWH,LLC</Link> <br />
                    <Link className="text-reset fw-bold" to="">Designed by <Link to="https://bmymarketer.com/" target="_blank">bmymarketer</Link></Link>
                </div>

            </footer>
            {/* sidebar */}
            <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebar" aria-labelledby="sidebarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="sidebarLabel">Menu</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><Link to="#" class="nav-link active" aria-current="page">Who We Are</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link">What We Do</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link">Careers</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link">Insights & News</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link">Investor Relations</Link></li>
                    </ul>
                </div>
            </div>
            {/* sidebar */}
        </>
    );
}

export default Footer;
