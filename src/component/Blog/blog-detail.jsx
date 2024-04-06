import React from "react";
import Banner2 from "../../layout/banner2";
import "./blog.css"

const BlogDetail = (props) => {
    return (
        <>

            <Banner2 heading="Our BlogDetails" />

            <section className=" container-fluid bg-dark-subtle ">
                <h1 className=" display-5 mt-5 mb-5 pt-5">KBR Purifier Ammonia Technology Selected by El Nasr Company for Intermediate Chemicals in Egypt</h1>
              <p> {Date()}</p>
            </section>
        </>
    );
}

export default BlogDetail;
