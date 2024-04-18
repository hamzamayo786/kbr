import React from "react";
import { Link } from "react-router-dom";
import Banner2 from "../../layout/banner2";

const VisionCom = () => {
    return (
        <>
           

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
                                <h4 className=" text-white">We Deliver</h4>
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
                                    <h4 className=" text-white">We Are People of Integrity</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card */}
                {/* card */}
                <div className=" col-lg-3 col-md-6 col-sm-12 position-relative text-start mt-2 mb-2">
                    <div className="values-parent">
                        <h1 className="values-btn">Our Values</h1>
                        <Link to="vision-value" className="value-section-btn" >LEARN MORE</Link>
                    </div>
                    <div class="card overflow-hidden " style={{ width: "100%" }}>
                        <img class="card-img-top overflow-hidden " src="../../assets/images/02.webp" alt="Card image cap" />
                        <div className="card-overlay position-absolute z-2 top-0">
                            <div class="card-body  w-100 d-flex justify-content-between ">
                                <h4 className=" text-white">We Are a Team of Teams</h4>
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
                                <h4 className=" text-white">We Empower</h4>
                            </div>
                        </div>
                    </div>

                </div>
                {/* card */}
            </div>
            </section>
            {/* our Values */}
        </>
    );
}

export default VisionCom;
