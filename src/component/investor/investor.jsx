import React, { useEffect, useRef } from 'react';
import './investor.css';
import '../../assets/js/investor.js'


function Investor() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Function to toggle video play/pause
        const togglePlay = () => {
            const video = videoRef.current;
            if (video.paused || video.ended) {
                video.play();
            } else {
                video.pause();
            }
        };

        // Adding event listener for play button
        const playButton = document.getElementById('playButton');
        if (playButton) {
            playButton.addEventListener('click', togglePlay);
        }

        // Clean up event listener
        return () => {
            if (playButton) {
                playButton.removeEventListener('click', togglePlay);
            }
        };
    }, []);

    return (

        <>
            <section className='investor'>
                <div class="investor-day-section">
                    <div class="investor-content">
                        <h1>KBR's 2024 Investor Day</h1>
                        <p class="date">May 8, 2024</p>
                        <a href="#" class="webcast-link">Webcast</a><br />
                        <a href="#" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div class="investor-stock-info">
                        <div className='investor-stock-inner'>
                            <div class="module-stock-header_stockQuote">
                                <h6>Stock Information</h6>
                                <div class="module_container--inner">
                                    <span class="module-stock-header_description1">NYSE: KBR</span>
                                    <span class="module-stock-header_stock-price">64.93</span>
                                    <span class="module-stock-header_change module-stock-header_up">
                                        <span class="module-stock-header_indicator">+</span>0.61 ( 0.95% )</span>
                                    <span class="module-stock-header_date-wrap">
                                        <span class="module-stock-header_date">Date of April 05, 2024</span>
                                        <span class="module-stock-header_description3">Pricing delayed by 20 minutes</span>
                                    </span></div>
                                <a href="/stock-info/stock-quote-and-chart/default.aspx" title="View More About Stock Quote" class="button--cta">View More <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className='investor-stock-image'>
                            <img className="kbr-site-logo img-fluid w-100 " src="../../../../assets/images/chart.jpg" alt="KBR team" />
                        </div>
                    </div>
                </div>
                <div className='container'>
                    {/* about us */}
                    <div className='about-heading mt-5 mb-5 '>
                        <h3 className='txt-primary mt-4 mb-4'>About US</h3>
                        <p className=' fs-5'>KBR delivers science, technology and engineering solutions to governments and companies around the world. Drawing from its rich 100-year history and culture of innovation and mission focus, KBR creates sustainable value by helping clients meet their most pressing challenges today and into the future.</p>
                        <a href="" title="View More About Stock Quote" class="button btn btn-primary">View More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    {/* about us */}
                    {/* cards */}
                    <div className=' row mt-5 mb-5'>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card" style={{ width: "100%" }}>
                                <img src="../../../assets/images/chart.jpg" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body d-flex align-items-center ">
                                    <p class="card-title txt-primary">KBR At a GlanceKBR At a Glance<a href="#" class="btn">  <i class="fa-solid fa-arrow-right"></i> <br /></a></p>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card" style={{ width: "100%" }}>
                                <img src="../../../assets/images/chart.jpg" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body d-flex align-items-center ">
                                    <p class="card-title txt-primary">KBR At a GlanceKBR At a Glance<a href="#" class="btn">  <i class="fa-solid fa-arrow-right"></i> <br /></a></p>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card" style={{ width: "100%" }}>
                                <img src="../../../assets/images/chart.jpg" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body d-flex align-items-center ">
                                    <p class="card-title txt-primary">KBR At a GlanceKBR At a Glance<a href="#" class="btn">  <i class="fa-solid fa-arrow-right"></i> <br /></a></p>

                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card" style={{ width: "100%" }}>
                                <img src="../../../assets/images/chart.jpg" class="card-img-top img-fluid" alt="..." />
                                <div class="card-body d-flex align-items-center ">
                                    <p class="card-title txt-primary">KBR At a GlanceKBR At a Glance<a href="#" class="btn">  <i class="fa-solid fa-arrow-right"></i> <br /></a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* cards */}

                    {/* brands */}
                    <div className='awards mt-5 mb-5'>
                        <div>
                            <h2 className='mb-5 mt-5 txt-primary'>Awards and Recognations</h2>
                        </div>
                        <img src='../../../assets/images/brands.jpg' className='img-fluid' alt='' />

                    </div>
                    {/* brands */}

                    {/* video play button */}
                    <div class="row hero__about-row overflow-hidden w-100">
                        <div>
                            <h2 className='mb-5 mt-5 txt-primary'>Featured Videos</h2>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4">
                            <div class="hero__about-video">
                                <iframe class="w-100" style={{ height: "inherit" }} src="https://www.youtube.com/embed/bixR-KIJKYM?si=N1tc01JwHEqbW0xR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4">
                            <div class="hero__about-video">
                                <iframe class="w-100" style={{ height: "inherit" }} src="https://www.youtube.com/embed/bixR-KIJKYM?si=N1tc01JwHEqbW0xR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4">
                            <div class="hero__about-video">
                                <iframe class="w-100" style={{ height: "inherit" }} src="https://www.youtube.com/embed/bixR-KIJKYM?si=N1tc01JwHEqbW0xR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12 mt-4 mb-4">
                            <div class="hero__about-video">
                                <iframe class="w-100" style={{ height: "inherit" }} src="https://www.youtube.com/embed/bixR-KIJKYM?si=N1tc01JwHEqbW0xR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>

                    {/* video play button */}

                    {/* events */}
                    <div className=' row mt-5 mb-5'>
                        <div>
                            <h2 className='mb-5 txt-primary'>Upcoming & Recent Events </h2>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card event-card border-0 rounded-0">
                                <div class="card-header bg-primary text-white text-uppercase  text-end">
                                    <h5 className=''> Event</h5>
                                </div>
                                <div class="card-body bg-light p-0 pt-2 pb-2">
                                    <p class="date text-secondary">March 12, 2024</p>
                                    <h5 class="card-title">Sustainable Technology Solutions Primer Webcast</h5>
                                    <p class="card-text">
                                        <i class="bi bi-camera-video-fill"></i> Webcast<br />
                                        <i class="bi bi-file-earmark-text-fill"></i> Presentation<br />
                                        <i class="bi bi-journal-bookmark-fill"></i> Supplement
                                    </p>
                                    <a href="#" class="card-link text-primary">Read More &rarr;</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card event-card border-0 rounded-0">
                                <div class="card-header bg-primary text-white text-uppercase  text-end">
                                    <h5 className=''> Event</h5>
                                </div>
                                <div class="card-body bg-light p-0 pt-2 pb-2">
                                    <p class="date text-secondary">March 12, 2024</p>
                                    <h5 class="card-title">Sustainable Technology Solutions Primer Webcast</h5>
                                    <p class="card-text">
                                        <i class="bi bi-camera-video-fill"></i> Webcast<br />
                                        <i class="bi bi-file-earmark-text-fill"></i> Presentation<br />
                                        <i class="bi bi-journal-bookmark-fill"></i> Supplement
                                    </p>
                                    <a href="#" class="card-link text-primary">Read More &rarr;</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card event-card border-0 rounded-0">
                                <div class="card-header bg-primary text-white text-uppercase  text-end">
                                    <h5 className=''> Event</h5>
                                </div>
                                <div class="card-body bg-light p-0 pt-2 pb-2">
                                    <p class="date text-secondary">March 12, 2024</p>
                                    <h5 class="card-title">Sustainable Technology Solutions Primer Webcast</h5>
                                    <p class="card-text">
                                        <i class="bi bi-camera-video-fill"></i> Webcast<br />
                                        <i class="bi bi-file-earmark-text-fill"></i> Presentation<br />
                                        <i class="bi bi-journal-bookmark-fill"></i> Supplement
                                    </p>
                                    <a href="#" class="card-link text-primary">Read More &rarr;</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <div class="card event-card border-0 rounded-0">
                                <div class="card-header bg-primary text-white text-uppercase  text-end">
                                    <h5 className=''> Event</h5>
                                </div>
                                <div class="card-body bg-light p-0 pt-2 pb-2">
                                    <p class="date text-secondary">March 12, 2024</p>
                                    <h5 class="card-title">Sustainable Technology Solutions Primer Webcast</h5>
                                    <p class="card-text">
                                        <i class="bi bi-camera-video-fill"></i> Webcast<br />
                                        <i class="bi bi-file-earmark-text-fill"></i> Presentation<br />
                                        <i class="bi bi-journal-bookmark-fill"></i> Supplement
                                    </p>
                                    <a href="#" class="card-link text-primary">Read More &rarr;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* events */}
                </div>

            </section>
        </>
    );
}

export default Investor; 