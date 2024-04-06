import React from "react";
import './style/header-footer.css';

const Footer = () => {
    return (
        <footer className="footer text-center text-lg-start text-white">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="me-4 text-reset">
                        <i class="fab fa-github"></i>
                    </a>    
                </div>

            </section>
            <section class="">
                <div class="container text-center text-md-start mt-5">

                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <div className="footer-branding">
                                <img className="main-logo " src="../../../../assets/images/main-logo.png" alt="KBR team" />

                            </div>
                            <h6 class="text-uppercase fw-bold mb-4">

                                <i class="fas fa-gem me-3"></i>
                                Appointed Wordwide Holdings, LLC

                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>

                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                             
                            </h6>
                            <p>
                                <a href="/" class="text-reset">Home</a>
                            </p>
                            <p>
                                <a href="what-we-do" class="text-reset">What WE DO</a>
                            </p>
                            <p>
                                <a href="who-we-are" class="text-reset">About US</a>
                            </p>
                            <p>
                                <a href="careers" class="text-reset">Careers</a>
                            </p>
                        </div>

                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 class="text-uppercase fw-bold mb-4">
                               
                            </h6>
                            <p>
                                <a href="insights$news" class="text-reset">Insights & News</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Investor</a>
                            </p>
                            <p>
                                <a href="contact-us" class="text-reset">Contact Us</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Privacy Policy</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Terms And Conditions</a>
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
                © 2021 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">KBR</a> <br/>
                <a className="text-reset fw-bold" href="">Designed by <a href="https://bmymarketer.com/" target="_blank">bmymarketer</a></a>
            </div>
            
        </footer>
    );
}

export default Footer;
