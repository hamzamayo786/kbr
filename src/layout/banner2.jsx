import React from "react";
import { Link } from "react-router-dom";


const Banner2 = (props) => {
    return (
        <>

            <section className="Banner2 mb-3 ">
                <div className="blur-banner2 container-fluid d-flex flex-column justify-content-end">
                    <p className=" display-4 text-white">{props.heading}</p>

                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link href="#">Home</Link></li>
                            <li class="breadcrumb-item"><Link href="#">Library</Link></li>
                            <li class="breadcrumb-item"><Link href="#">Data</Link></li>
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
