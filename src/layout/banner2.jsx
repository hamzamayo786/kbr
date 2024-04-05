import React from "react";

const Banner2 = (props) => {
    return (
        <>

            <section className="Banner2 mb-3 ">
                <div className="blur-banner2 container-fluid d-flex flex-column justify-content-end">
                    <p className=" display-4 text-white">{props.heading}</p>

                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Library</a></li>
                            <li class="breadcrumb-item"><a href="#">Data</a></li>
                        </ol>
                    </nav>

                </div>
                <div className="">

                </div>
            </section>
        </>
    );
}

export default Banner2;
