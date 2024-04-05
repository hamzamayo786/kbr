import React from "react";

const New_Insights = () => {
    return (
        <>
            <div>
                <h1>Delivering Solutions, Changing the World®</h1>
                <p>Simply put, at KBR, we do things that matter.</p>
                <p>Every day, our people work together to deliver solutions that are helping solve the great challenges and opportunities of our time, including climate change, national security, energy transition and security, cybersecurity, space exploration, and more.</p>
                <p>The KBR team of teams delivers future-forward science, technology and engineering solutions and mission-critical services that help governments and companies around the world accomplish their most important objectives, while also helping achieve their sustainability goals.</p>
                <p>We deliver through two primary businesses — Government Solutions and Sustainable Technology Solutions.</p>
            </div>
            
            <section className="Slider container-fluid mt-5 mb-3">
                <div className="row">
                    <div className=" col-lg-6 col-md-6 col-sm-12 position-relative">
                        <div class="card " style={{ width: "40rem" }}>
                            <div className="card--image-tile__blur"> </div>
                            <img class="card-img-top overflow-hidden" src="../../assets/images/job-tec.webp" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <a href="#" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </a>
                                <a href="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </a>
                            </div>

                        </div>
                    </div>
                    <div className=" col-lg-6 col-md-6 col-sm-12 position-relative">
                        <div class="card " style={{ width: "40rem" }}>
                            <div className="card--image-tile__blur"> </div>
                            <img class="card-img-top overflow-hidden" src="../../assets/images/job-tec.webp" alt="Card image cap" />
                            <div class="card-body position-absolute z-2 bottom-0 w-100 d-flex justify-content-between ">
                                <a href="#" class="btn  text-white"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </a>
                                <a href="#" class="btn  text-white"> <i class="fa-regular fa-bookmark"></i> <br /> Save </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default New_Insights;
