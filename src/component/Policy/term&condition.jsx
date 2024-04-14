import React from "react";
import { Link } from "react-router-dom";
import Banner2 from "../../layout/banner2";

const Term_Condition = () => {
    return (
        <>
            <Banner2 heading="Terms & Conditions" />

            <section className=" container mt-5 mb-5 privacy-policy">
                <div className=" container">
                    <p className="txt-primary display-5">
                    Please read the following, and the Privacy Statement, before accessing and using this website (“Site”).
                    </p><br/> <br/>
                    <span className=" lh-lg"> This Privacy Notice addresses the following topics:</span>
                    <ul>
                        <li> <a href="#!" className="txt-primary"> Purpose of This Privacy Notice</a></li>
                        <li> <a href="#!" className="txt-primary"> Purpose of This Privacy Notice</a></li>
                        <li> <a href="#!" className="txt-primary"> Purpose of This Privacy Notice</a></li>
                        <li> <a href="#!" className="txt-primary"> Purpose of This Privacy Notice</a></li>
                        <li> <a href="#!" className="txt-primary"> Purpose of This Privacy Notice</a></li>
                        <li> <a href="#!" className="txt-primary"> Purpose of This Privacy Notice</a></li>
                        <li> <a href="#!" className="txt-primary"> Purpose of This Privacy Notice</a></li>
                        <li> <a href="#!" className="txt-primary"> Purpose of This Privacy Notice</a></li>
                        <li> <a href="#!" className="txt-primary"> Purpose of This Privacy Notice</a></li>
                    </ul>

                    <p className=" txt-primary display-6 mt-5 mb-5"> Purpose of This Privacy Notice</p>
                    <p>This Privacy Notice explains what KBR does with personal information provided to us through this Site, or, if you are a Business Contact, during the course of your business dealings with us. It describes the information we collect and explains how we use, share, store and safeguard that information. This Privacy Notice also contains information on how to contact us, how to exercise rights that you might have under the law that applies to you in relation to your personal data, as well as how to contact us if you have a question or concern.</p>

                </div>
            </section>
        </>
    );
}

export default Term_Condition;
