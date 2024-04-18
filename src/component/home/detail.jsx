import React from "react";
import New_Insights from "./news&insight";
import { Link } from "react-router-dom";


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
                                <Link to="#" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
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
                                <Link to="#" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
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
                                <Link to="#" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
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
                        <h4 className="mb-3">Benifits</h4>
                        <div class="card " style={{ width: "100%" }}>
                            <img class="card-img-top overflow-hidden" src="../../assets/images/Connect_V2.jpg.jpg" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="#" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
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

            {/* our Values */}
            <section className=" our-values container mt-5 mb-5">
                {/* Values card  */}
                <div className="row  align-items-center ">
                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <div class="card overflow-hidden " style={{ width: "100%" }}>
                            <img class="card-img-top overflow-hidden " src="../../assets/images/02.webp" alt="Card image cap" />
                            <div className="card-overlay position-absolute z-2 top-0">
                                <div class="card-body  w-100 d-flex justify-content-between ">
                                    <h4 className=" text-white">We Empower</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card */}


                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <div className=" col-lg-12 col-md-12 col-sm-12 position-relative text-start mt-2 mb-2">
                            <div class="card overflow-hidden " style={{ width: "100%" }}>
                                <img class="card-img-top overflow-hidden " src="../../assets/images/ourvalues.webp" alt="Card image cap" />
                                <div className="card-overlay position-absolute z-2 top-0">
                                    <div class="card-body  w-100 d-flex justify-content-between ">
                                        <h4 className=" text-white">We Value Our People</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-12 col-md-12 col-sm-12 position-relative text-start mt-2 mb-2">
                            <div class="card overflow-hidden " style={{ width: "100%" }}>
                                <img class="card-img-top overflow-hidden " src="../../assets/images/ourvalues1.webp" alt="Card image cap" />
                                <div className="card-overlay position-absolute z-2 top-0">
                                    <div class="card-body  w-100 d-flex justify-content-between ">
                                        <h4 className=" text-white">We Deliver</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <div className=" text-center">
                            <h1 className=" ">Our Values</h1>
                            <p>We deliver a variety of solutions worldwide, from science and technology to sustainability and engineering.</p>
                        </div>
                        <div class="card overflow-hidden " style={{ width: "100%" }}>
                            <img class="card-img-top overflow-hidden " src="../../assets/images/02.webp" alt="Card image cap" />
                            <div className="card-overlay position-absolute z-2 top-0">
                                <div class="card-body  w-100 d-flex justify-content-between ">
                                    <h4 className=" text-white">We Are People of Integrity</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* card */}

                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">

                        <div class="card overflow-hidden " style={{ width: "100%" }}>
                            <img class="card-img-top overflow-hidden " src="../../assets/images/Belong.jpg" alt="Card image cap" />
                            <div className="card-overlay position-absolute z-2 top-0">
                                <div class="card-body  w-100 d-flex justify-content-between ">
                                    <h4 className=" text-white">We Are a Team of Teams</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* card */}
                </div>
            </section>
            {/* our Values */}

            {/* Our Passion */}
            <section className=" our-Passion container mt-5 mb-5">
                <div className=" text-start">
                    <h1 className=" mb-5 ">Our Passion</h1>
                </div>
                {/* card slider */}
                <div className="row ">
                    {/* card */}
                    <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                        <h5 className="mb-3">Sustainability</h5>
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
                        <h5 className="mb-3">Inclusion and Diversity</h5>
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
                        <h5 className="mb-3">Community Involvement</h5>
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
                        <h5 className="mb-3">Culture</h5>
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
