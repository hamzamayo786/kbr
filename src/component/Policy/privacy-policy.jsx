import React from "react";
import { Link } from "react-router-dom";
import Banner2 from "../../layout/banner2";

const PrivacyPolicy = () => {
    return (
        <>
            <Banner2 heading="Privacy Policy" />

            <section className=" container mt-5 mb-5 privacy-policy">
                <div className=" container">
                    <p>
                        Thank you for your trust in KBR and for taking the time to read our Website Privacy Notice (“Privacy Notice”). KBR, with operations in 40 countries, is a global provider of differentiated professional services and technologies across the asset and program lifecycle within the Government Solutions and Sustainable Technology sectors. This Notice is provided to let you know how we protect the privacy of personal information provided to us (a) in connection with your use of this website (the “Site”), and (b) if you represent a corporate customer, business partner, contractor, supplier, vendor, or similar third party (“Business Contact”), during the course of your business dealings with us.
                    </p><br/> <br/>
                    <span className=" lh-lg"> This Privacy Notice addresses the following topics:</span>
                    <ul>
                        <li> <Link href="#!" className="txt-primary"> Purpose of This Privacy Notice</Link></li>
                        <li> <Link href="#!" className="txt-primary"> Purpose of This Privacy Notice</Link></li>
                        <li> <Link href="#!" className="txt-primary"> Purpose of This Privacy Notice</Link></li>
                        <li> <Link href="#!" className="txt-primary"> Purpose of This Privacy Notice</Link></li>
                        <li> <Link href="#!" className="txt-primary"> Purpose of This Privacy Notice</Link></li>
                        <li> <Link href="#!" className="txt-primary"> Purpose of This Privacy Notice</Link></li>
                        <li> <Link href="#!" className="txt-primary"> Purpose of This Privacy Notice</Link></li>
                        <li> <Link href="#!" className="txt-primary"> Purpose of This Privacy Notice</Link></li>
                        <li> <Link href="#!" className="txt-primary"> Purpose of This Privacy Notice</Link></li>
                    </ul>

                    <p className=" txt-primary display-6 mt-5 mb-5"> Purpose of This Privacy Notice</p>
                    <p>This Privacy Notice explains what KBR does with personal information provided to us through this Site, or, if you are a Business Contact, during the course of your business dealings with us. It describes the information we collect and explains how we use, share, store and safeguard that information. This Privacy Notice also contains information on how to contact us, how to exercise rights that you might have under the law that applies to you in relation to your personal data, as well as how to contact us if you have a question or concern.</p>

                </div>
            </section>
        </>
    );
}

export default PrivacyPolicy;
