import React from "react";
import { Link } from "react-router-dom";

const New_Insights = (props) => {
    return (
        <>
            <section className="Slider container-fluid mt-5 mb-3">
                <div className="row">
                    <div className=" col-lg-6 col-md-6 col-sm-12 position-relative">
                        <div class="card " style={{ width: "100%" }}>
                            <div className="card--image-tile__blur">
                                <div class="card-body ">
                                    <h2 className="text-white display-6">Sustainable Technology Solutions</h2>
                                </div>
                            </div>
                            <img class="card-img-top overflow-hidden" src={props.imgSrc} alt="Card image cap" />

                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="suitable-tec" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                <Link to="suitable-tec" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" col-lg-6 col-md-6 col-sm-12 position-relative">
                        <div class="card " style={{ width: "100%" }}>
                            <div className="card--image-tile__blur">
                                <div class="card-body ">
                                    <h2 className="text-white display-6">Sustainable Technology Solutions</h2>
                                </div>
                            </div>
                            <img class="card-img-top overflow-hidden" src={props.imgSrc1}  alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <Link to="suitable-tec" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                <Link to="suitable-tec" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default New_Insights;
