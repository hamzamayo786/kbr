import React from "react";
import Banner2 from "../../layout/banner2";
import "./blog.css"
import { Link } from "react-router-dom";
import { Outlet } from "react-router";


const Blog = (props) => {
    return (
        <>

            <Banner2 heading="Our Blogs" />
            <Outlet/>
            <section className=" container-fluid bg-dark-subtle ">
                <h1 className=" display-5 mt-5 mb-5 pt-5">All Insights</h1>
                {/* cards */}
                <div >
                    <div className="row">
                        <div className=" col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
                            <div class="blog-card card">
                                <div class="card-header">
                                    Press Releasee
                                </div>
                                <div class="card-body">
                                    <p> 12/03/2024</p>
                                    <h5 class="card-title"><p href="#! " className="txt-primary">KBR Purifier Ammonia Technology Selected by El Nasr Company for Intermediate Chemicals in Egypt</p></h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    <div class="card-body  w-100 d-flex justify-content-between ">
                                        <Link to="../blog-detail" class="btn  txt-primary"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                        <Link to="#" class="btn  txt-primary"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
                            <div class="blog-card card">
                                <div class="card-header">
                                    Press Releasee
                                </div>
                                <div class="card-body">
                                    <p> 12/03/2024</p>
                                    <h5 class="card-title"><p href="#! " className="txt-primary">KBR Purifier Ammonia Technology Selected by El Nasr Company for Intermediate Chemicals in Egypt</p></h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    <div class="card-body  w-100 d-flex justify-content-between ">
                                    <Link to="../blog-detail" class="btn  txt-primary"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                        <Link to="#" class="btn  txt-primary"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
                            <div class="blog-card card">
                                <div class="card-header">
                                    Press Releasee
                                </div>
                                <div class="card-body">
                                    <p> 12/03/2024</p>
                                    <h5 class="card-title"><p href="#! " className="txt-primary">KBR Purifier Ammonia Technology Selected by El Nasr Company for Intermediate Chemicals in Egypt</p></h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    <div class="card-body  w-100 d-flex justify-content-between ">
                                        <Link to="../blog-detail" class="btn  txt-primary"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                        <Link to="#" class="btn  txt-primary"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
                            <div class="blog-card card">
                                <div class="card-header">
                                    Press Releasee
                                </div>
                                <div class="card-body">
                                    <p> 12/03/2024</p>
                                    <h5 class="card-title"><p href="#! " className="txt-primary">KBR Purifier Ammonia Technology Selected by El Nasr Company for Intermediate Chemicals in Egypt</p></h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    <div class="card-body  w-100 d-flex justify-content-between ">
                                        <Link to="../blog-detail" class="btn  txt-primary"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                        <Link to="#" class="btn  txt-primary"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
                            <div class="blog-card card">
                                <div class="card-header">
                                    Press Releasee
                                </div>
                                <div class="card-body">
                                    <p> 12/03/2024</p>
                                    <h5 class="card-title"><p href="#! " className="txt-primary">KBR Purifier Ammonia Technology Selected by El Nasr Company for Intermediate Chemicals in Egypt</p></h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    <div class="card-body  w-100 d-flex justify-content-between ">
                                        <Link to="../blog-detail" class="btn  txt-primary"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                        <Link to="#" class="btn  txt-primary"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 col-md-6 col-sm-12 mt-3 mb-3">
                            <div class="blog-card card">
                                <div class="card-header">
                                    Press Releasee
                                </div>
                                <div class="card-body">
                                    <p> 12/03/2024</p>
                                    <h5 class="card-title"><p href="#! " className="txt-primary">KBR Purifier Ammonia Technology Selected by El Nasr Company for Intermediate Chemicals in Egypt</p></h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                    <div class="card-body  w-100 d-flex justify-content-between ">
                                        <Link to="../blog-detail" class="btn  txt-primary"> <i class="fa-solid fa-arrow-right"></i> <br /> Learn More </Link>
                                        <Link to="#" class="btn  txt-primary"> <i class="fa-regular fa-bookmark"></i> <br /> Save </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* cards */}
                {/* pagination */}
                <nav aria-label="Page navigation example" className="pt-4 pb-4 mb-5" >
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <Link class="page-link">Previous</Link>
                        </li>
                        <li class="page-item"><Link class="page-link" href="#">1</Link></li>
                        <li class="page-item"><Link class="page-link" href="#">2</Link></li>
                        <li class="page-item"><Link class="page-link" href="#">3</Link></li>
                        <li class="page-item">
                            <Link class="page-link" href="#">Next</Link>
                        </li>
                    </ul>
                </nav>
                {/* pagination */}
            </section>
        </>
    );
}

export default Blog;
