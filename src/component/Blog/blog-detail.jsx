import React from "react";
import Banner2 from "../../layout/banner2";
import "./blog.css"
import { Link } from "react-router-dom";

const BlogDetail = (props) => {
    return (
        <>

            <Banner2 heading="Our BlogDetails" />

            <section className=" container mt-5 mb-5">
                <div className="heading">
                    <h1 className=" mt-5 mb-5 pt-5 txt-primary">KBR Purifier Ammonia Technology Selected by El Nasr Company for Intermediate Chemicals in Egypt</h1>
                    <p className=" mb-5"> {Date()}</p>
                </div>
                <div>
                    <p>
                        HOUSTON, April 3, 2024 – KBR (NYSE: KBR) announced today that its PurifierTM ammonia technology was selected by Wuhuan Engineering Co. Ltd. for the expansion of El Nasr Company for Intermediate Chemicals’ (NCIC) fertilizer complex in Egypt.
                        <br /> <br />
                        Under the terms of the contract, KBR will provide the technology license, proprietary engineering design and proprietary equipment for NCIC’s 1,200 metric tonnes per day ammonia plant.
                        <br /> <br />
                        “We are pleased to be a part of this project and support El Nasr Company for Intermediate Chemicals’ growth in the fertilizer sector by providing our sustainable and superior Purifiertechnology,” said Jay Ibrahim, President, KBR Sustainable Technology Solutions. “KBR’s Purifier process is an energy-efficient and reliable solution for ammonia producers. Furthermore, with a lower carbon footprint compared to other more conventional ammonia technologies, KBR’s Purifier ammonia process helps customers meet their sustainability goals in a cost-effective manner.”
                        <br /> <br />
                        KBR is a world leader in ammonia technology and has been at the forefront of innovation in the ammonia market for decades. Since 1943, KBR has licensed, engineered, or delivered more than 250 grassroot ammonia plants worldwide.
                    </p>
                    <h6 className=" mt-5 mb-5">About KBR</h6>
                    <p>
                        We deliver science, technology and engineering solutions to governments and companies around the world. KBR employs approximately 34,000 people worldwide with customers in more than 80 countries and operations in over 30 countries.
                        <br />
                        KBR is proud to work with its customers across the globe to provide technology, value-added services, and long-term operations and maintenance services to ensure consistent delivery with predictable results. At KBR, We Deliver.
                        <br />
                        Visit <Link href="#1">www.kbr.com</Link>
                    </p>
                    <h6 className=" mt-5 mb-5">Forward Looking Statements</h6>
                    <p>The statements in this press release that are not historical statements, including statements regarding future contractual and process performance, are forward-looking statements within the meaning of the federal securities laws. These statements are subject to numerous risks, uncertainties and assumptions, many of which are beyond the company’s control, that could cause actual results to differ materially from the results expressed or implied by the statements. These risks, uncertainties and assumptions include, but are not limited to, those set forth in the company’s most recently filed Annual Report on Form 10-K, any subsequent Form 10-Qs and 8-Ks and other U.S. Securities and Exchange Commission filings, which discuss some of the important risks, uncertainties and assumptions that the company has identified that may affect its business, results of operations and financial condition. Due to such risks, uncertainties and assumptions, you are cautioned not to place undue reliance on such forward-looking statements, which speak only as of the date hereof.  Except as required by law, the company undertakes no obligation to revise or update publicly any forward-looking statements for any reason.</p>
                </div>

            </section>
        </>
    );
}

export default BlogDetail;
