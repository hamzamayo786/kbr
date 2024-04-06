
import React from "react";
import New_Insights from "../home/news&insight";
import Banner2 from "../../layout/banner2";

const WhatWeDo = () => {
    return (
        <>
        <Banner2 heading="What WE DO"/>
            <section className="mt-5 mb-5">
                <div className=" container pt-5 pb-3">
                    <p>Simply put, at KBR, we do things that matter.</p>
                    <p>Every day, our people work together to deliver solutions that are helping solve the great challenges and opportunities of our time, including climate change, national security, energy transition and security, cybersecurity, space exploration, and more.</p>
                    <p>The KBR team of teams delivers future-forward science, technology and engineering solutions and mission-critical services that help governments and companies around the world accomplish their most important objectives, while also helping achieve their sustainability goals.</p>
                    <p>We deliver through two primary businesses — Government Solutions and Sustainable Technology Solutions.</p>
                </div>
               <New_Insights imgSrc="../../assets/images/Modren-Tech.jpg"  imgSrc1="../../assets/images/Modren-Tech.jpg"/>
            </section>
        </>
    );
}

export default WhatWeDo;
