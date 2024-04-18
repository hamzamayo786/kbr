import React from "react";
import { Link } from "react-router-dom";
import Banner2 from "../../layout/banner2";
import VisionCom from "../home/values-com";

const Vision = () => {
    return (
        <>
            <Banner2 heading="Vision And Values" />
            <section class="container p-5 vision-motto-container">
                <div class="vision-section">
                    <h2>Our Vision</h2>
                    <p>We strive to create a safer, more secure and sustainable world by bringing together the best and brightest to deliver technologies and solutions that help our customers accomplish their most critical missions and objectives.</p>
                </div>
                <div class="motto-section">
                    <h2>Our Motto</h2>
                    <p>Our motto is both an expression of KBR's culture and our personal guarantee to our customers.</p>
                    <p class="motto">We Deliver®</p>
                </div>
            </section>
            <VisionCom/>

        </>
    );
}

export default Vision;
