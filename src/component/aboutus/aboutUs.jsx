import React from "react";
import Banner2 from "../../layout/banner2";
import './css/style.css'
import New_Insights from "../home/news&insight";

const AboutUs = () => {
    return (
        <>
            <Banner2 heading="WHO WE ARE" />

            <section className="mt-5 mb-5  container text-center">
                <div>
                    <p className=" mb-5 display-4 txt-primary"> We Deliver®</p>
                    <p> At KBR, we partner with government and industry clients to provide purposeful and comprehensive solutions with an emphasis on efficiency and safety. With a full portfolio of services, proprietary technologies and expertise, our employees are ready to handle projects and missions from planning and design to sustainability and maintenance. Whether at the bottom of the ocean or in outer space, our clients trust us to deliver the impossible on a daily basis.</p>
                </div>

                {/* video */}
                <div>
                    <div class="row hero__about-row overflow-hidden w-100 mt-5 mb-5">
                        <div class="col-xxl-12">
                            <div class="hero__about-video">
                                <iframe class="w-100" style={{ height: "inherit" }} src="https://www.youtube.com/embed/FPhg_ZjrPtU?si=tzlf3XIRdmuEagJp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                    <button className="px-3 py-2 rounded border bg-dark-subtle"><a href="what-we-do" className="txt-primary">Discover More</a></button>

                </div>
                {/* video */}
                {/* news&insights */}
            </section>

            <section className=" container-fluid">
                <New_Insights imgSrc="../../assets/images/job-tec.webp" imgSrc1="../../assets/images/job-tec.webp" />

                {/* news&insights */}

                {/*team  */}
                <div class="zero-harm-section">
                    <div class="content">
                        <h2>Zero Harm</h2>
                        <p>KBR’s sustainability policy was built on the foundation of our industry-leading Zero Harm safety platform.</p>
                        <p>Just as we’re committed to safeguarding the health and safety of our people, we are also committed to doing what’s right and making decisions that count for our planet, our communities, our business, and future generations.</p>
                        <a href="#" class="learn-more-btn">Learn More &rarr;</a>
                    </div>
                    <div class="image-container">
                        <img className="img-fluid w-100" src="../../../../assets/images/Zero-Harm.jpg" alt="KBR team" />
                    </div>
                </div>
                {/* team */}

                {/*team  */}
                <div class="community-section">
                    <div class="community-content">
                        <h2>Zero Harm</h2>
                        <p>KBR’s sustainability policy was built on the foundation of our industry-leading Zero Harm safety platform.</p>
                        <p>Just as we’re committed to safeguarding the health and safety of our people, we are also committed to doing what’s right and making decisions that count for our planet, our communities, our business, and future generations.</p>
                        <a href="#" class="learn-more-btn">Learn More &rarr;</a>
                    </div>
                    <div class="image-container">
                        <img className="img-fluid w-100" src="../../../../assets/images/Zero-Harm.jpg" alt="KBR team" />
                    </div>
                </div>
                {/* team */}

                {/*team  */}
                <div class="zero-harm-section">
                    <div class="content">
                        <h2>Zero Harm</h2>
                        <p>KBR’s sustainability policy was built on the foundation of our industry-leading Zero Harm safety platform.</p>
                        <p>Just as we’re committed to safeguarding the health and safety of our people, we are also committed to doing what’s right and making decisions that count for our planet, our communities, our business, and future generations.</p>
                        <a href="#" class="learn-more-btn">Learn More &rarr;</a>
                    </div>
                    <div class="image-container">
                        <img className="img-fluid w-100" src="../../../../assets/images/Zero-Harm.jpg" alt="KBR team" />
                    </div>
                </div>
                {/* team */}

            </section>
            <div class="join-our-team-section">
                <div class="container">
                    <h1 className="txt-primary">Join Our Team</h1>
                    <p>The people of KBR change the world every day, providing the intelligence to solve any challenge. If you're up to the task, we want you on our team.</p>
                    <a href="#" class="search-jobs-btn">SEARCH JOB OPENINGS</a>
                </div>
            </div>

        </>
    );
}

export default AboutUs;
