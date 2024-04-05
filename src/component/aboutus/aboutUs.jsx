import React from "react";
import Banner2 from "../../layout/banner2";
import './css/style.css'
import New_Insights from "../home/news&insight";

const AboutUs = () => {
    return (
        <>
            <Banner2 heading="WHO WE ARE" />

            <section className="mt-5 mb-5  container-fluid text-center">
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

                <New_Insights imgSrc="../../assets/images/job-tec.webp" imgSrc1="../../assets/images/job-tec.webp" />

                {/* news&insights */}

                {/*  */}
                <div class="executive-leadership-section">
                    <div class="executive-portraits">
                        {/* <!-- Repeat this block for each portrait, replacing the src with your image URLs --> */}
                        <div class="portrait">
                            <img src="https://via.placeholder.com/150" alt="Leader Name"/>
                        </div>
                        {/* <!-- ... other portraits --> */}
                    </div>
                    <div class="executive-info">
                        <h2>Executive Leadership</h2>
                        <p>Our corporate leaders come from diverse backgrounds, work settings and experiences, making them a critical asset to our operations around the world.</p>
                        <a href="#" class="executive-link">Meet our Executive Leadership &rarr;</a>
                    </div>
                </div>

            </section>
        </>
    );
}

export default AboutUs;
