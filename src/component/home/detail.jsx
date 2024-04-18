import React from "react";
import New_Insights from "./news&insight";
import { Link } from "react-router-dom";
import VisionCom from "./values-com";


const Detail = () => {
    return (
        <>

            <New_Insights imgSrc="../../assets/images/job-tec.webp" imgSrc1="../../assets/images/job-tec.webp" />

            {/* working team */}
            <section className="working-team container mt-5 mb-5">
                <div className=" text-start mb-5">
                    <h1 className=" ">Working at KBR</h1>
                    <p>We deliver a variety of solutions worldwide, from science and technology to sustainability and engineering.</p>
                </div>
                {/* Working Cards */}
                <div className="row ">
                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <h4 className="mb-3">Belong</h4>
                        <div class="card " style={{ width: "100%" }}>
                            <img class="card-img-top  overflow-hidden" src="../../assets/images/Belong.jpg" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="/careers" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                            </div>

                        </div>
                        <div class="card-detail">
                            <p> Find the list of nameservers at your registrar. Add both of your assigned Cloudflare nameservers, remove any other nameservers, and save your changes.</p>
                        </div>
                    </div>
                    {/* card */}


                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <h4 className="mb-3">Connect</h4>
                        <div class="card " style={{ width: "100%" }}>
                            <img class="card-img-top overflow-hidden" src="../../assets/images/Benefits_V2.jpg" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="/careers" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                            </div>

                        </div>
                        <div class="card-detail">
                            <p> Find the list of nameservers at your registrar. Add both of your assigned Cloudflare nameservers, remove any other nameservers, and save your changes.</p>
                        </div>
                    </div>
                    {/* card */}
                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <h4 className="mb-3">Grow</h4>
                        <div class="card " style={{ width: "100%" }}>
                            <img class="card-img-top overflow-hidden" src="../../assets/images/Grow.jpg.jpg" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="/careers" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                            </div>

                        </div>
                        <div class="card-detail">
                            <p> Find the list of nameservers at your registrar. Add both of your assigned Cloudflare nameservers, remove any other nameservers, and save your changes.</p>
                        </div>
                    </div>
                    {/* card */}

                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <h4 className="mb-3">Benefits</h4>
                        <div class="card " style={{ width: "100%" }}>
                            <img class="card-img-top overflow-hidden" src="../../assets/images/Connect_V2.jpg.jpg" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="/careers" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                            </div>

                        </div>
                        <div class="card-detail">
                            <p> Find the list of nameservers at your registrar. Add both of your assigned Cloudflare nameservers, remove any other nameservers, and save your changes.</p>
                        </div>
                    </div>
                    {/* card */}
                </div>
                {/* Working Cards */}
            </section>
            {/* working team */}

            <VisionCom/>

            {/* Our Passion */}
            <section className=" our-Passion container mt-5 mb-5">
                <div className=" text-start">
                    <h1 className=" mb-5 ">Our Passion</h1>
                </div>
                {/* card slider */}
                <div className="row ">
                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <h4 className="mb-3 passion-heading">Sustainability</h4>
                        <div class="card " style={{ width: "100%" }}>
                            <img class="card-img-top  overflow-hidden" src="../../assets/images/Homepage-Community.jpg" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="#" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                            </div>
                        </div>
                    </div>
                    {/* card */}


                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <h4 className="mb-3 passion-heading">Inclusion and Diversity</h4>
                        <div class="card " style={{ width: "100%" }}>
                            <img class="card-img-top overflow-hidden" src="../../assets/images/Homepage-Culture.jpg" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="#" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <h4 className="mb-3 passion-heading">Community Involvement</h4>
                        <div class="card " style={{ width: "100%" }}>
                            <img class="card-img-top overflow-hidden" src="../../assets/images/team-passion.jpg" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="#" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                            </div>
                        </div>
                    </div>
                    {/* card */}

                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <h4 className="mb-3 passion-heading">Culture</h4>
                        <div class="card " style={{ width: "100%" }}>
                            <img class="card-img-top overflow-hidden" src="../../assets/images/Sustainability.jpg" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="#" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                </div>
            </section>
            {/* Our Passion */}

            {/* Insights & News */}
            <section className=" Insights-News container mt-5 mb-5">
                <div className=" text-center">
                    <h1 className=" mb-5 ">Latest Insights & News</h1>
                </div>
                <div className="row justify-content-center ">
                    {/* card */}
                    <div className=" col-lg-12 col-md-12 col-sm-12 position-relative text-start mt-2 mb-2 ">
                        <div class="card Insights-News-cards text-white">
                            <div class="card-header">
                                11 Mar 2024 &nbsp; | &nbsp; Stories
                            </div>
                            <div class="card-body  row justify-content-between">
                                <div className="col-md-8">
                                    <h4 class="card-title">Analyzing the Psychological Impact of the First Mars Habitat Simulation</h4>
                                </div>
                                <div class="card-icons col-md-4 text-end ">
                                    <Link to="insights_news" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                    <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* card */}


                    {/* card */}
                    <div className=" col-lg-12 col-md-12 col-sm-12 position-relative text-start mt-2 mb-2 ">
                        <div class="card Insights-News-cards text-white">
                            <div class="card-header">
                                11 Mar 2024 &nbsp; | &nbsp; Stories
                            </div>
                            <div class="card-body  row justify-content-between">
                                <div className="col-md-8">
                                    <h4 class="card-title">Analyzing the Psychological Impact of the First Mars Habitat Simulation</h4>
                                </div>
                                <div class="card-icons col-md-4 text-end ">
                                    <Link to="insights_news" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                    <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* card */}

                    {/* card */}
                    <div className=" col-lg-12 col-md-12 col-sm-12 position-relative text-start mt-2 mb-2 ">
                        <div class="card Insights-News-cards text-white">
                            <div class="card-header">
                                11 Mar 2024 &nbsp; | &nbsp; Stories
                            </div>
                            <div class="card-body  row justify-content-between">
                                <div className="col-md-8">
                                    <h4 class="card-title">Analyzing the Psychological Impact of the First Mars Habitat Simulation</h4>
                                </div>
                                <div class="card-icons col-md-4 text-end ">
                                    <Link to="insights_news" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                    <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* card */}


                    {/* card */}
                    <div className=" col-lg-12 col-md-12 col-sm-12 position-relative text-start mt-2 mb-2 ">
                        <div class="card Insights-News-cards text-white">
                            <div class="card-header">
                                11 Mar 2024 &nbsp; | &nbsp; Stories
                            </div>
                            <div class="card-body  row justify-content-between">
                                <div className="col-md-8">
                                    <h4 class="card-title">Analyzing the Psychological Impact of the First Mars Habitat Simulation</h4>
                                </div>
                                <div class="card-icons col-md-4 text-end ">
                                    <Link to="insights_news" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                    <Link to="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div class="card-icons col-12 text-center ">
                        <Link to="insights_news" class="btn  txt-primary mt-5"> VIEW ALL NEWS & INSIGHTS </Link>

                    </div>
                </div>
            </section>
            {/* Our Passion */}

        </>
    );
}

export default Detail;
