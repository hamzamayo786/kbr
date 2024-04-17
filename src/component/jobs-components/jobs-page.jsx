import React from 'react';
import './jobs.css';
import Community from './community-section';
import { Link, useParams } from "react-router-dom";


function Jobs() {
    const { id } = useParams();
  return (
    <>
     {/* ------------------------- banner section ------------------- */}

     <div className='job-banner '>
        <div className='overlay'></div>
       <div className='main-container banner-align'>
       <h2>A Career at KBR Could Change the World - And Change Your Life</h2>
        <p>Find your next opportunity:</p>
        <div className='job-banner-form'>
            <form action="/search-jobs" method="get" className='job-search-form'>
                <div>
                    <input type="text" id="jobSearch" name="jobSearch" placeholder="Search a Job" required />
                </div>
                <div>
                    <input type="text" id="location" name="location" placeholder="Enter Location" required />
                </div>
                <button type="submit">Find Jobs</button>
            </form>
        </div>
       </div>

     </div>
     {/* -------------------------jobs and filters section ------------------- */}
     <div className='jobs-and-filters'>
        <div className='left-filters'>
            <h1>Refine your search</h1>
            <div className='left-filter-cate'>
                
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Catogery
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Country 
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            State / Province
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingfour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                            City 
                        </button>
                        </h2>
                        <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingfive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                            Hiring Type
                        </button>
                        </h2>
                        <div id="collapsefive" class="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingsix">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                            Remote
                        </button>
                        </h2>
                        <div id="collapsesix" class="accordion-collapse collapse" aria-labelledby="headingsix" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingseven">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                            Location Slider
                        </button>
                        </h2>
                        <div id="collapseseven" class="accordion-collapse collapse" aria-labelledby="headingseven" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
            <div className='job-alert'>
                <div className='job-alert-inner'>
                    <h4><i class="fa fa-bell" aria-hidden="true"></i> Create Job Alert</h4>
                    <p>
                        <span>NOTE:</span>
                        Use refine search filters above to get better job alerts
                    </p>
                    <form action="/search-jobs" method="get" class="alert-form">
                            <div class="form-group">
                                <label>
                                    Enter Address
                                </label>
                                <input type="email" placeholder="Enter email" id="jobAlertEmailAddress" name="jobSearch" autocomplete="email" required />
                            </div>
                            <div class="form-group dropdown-custom">
                                <label for="frequency">You'll get emails:</label>
                                <select id="frequency" name="frequency" required>
                                <option value="1">Daily</option>
                                <option value="2">Weekly</option>
                                <option value="4">Monthly</option>
                                </select>
                            </div>
                            <button type="submit" class="submit-btn">Create Job Alert</button>
                            </form>


                </div>
            </div>
            <div className='about-company'>
                <h2>About Us</h2>
                <img className="kbr-site-logo img-fluid w-100 " src="../../../../assets/images/logo.jpg" alt="KBR team" />
                <h4 className='about-subheading'>
                    KBR — Delivering Solutions, Changing the World.
                </h4>
                <p>
                KBR brings together the best and brightest to deliver science, technology and engineering solutions that help governments and companies around the world accomplish their most critical missions and objectives.
                In everything we do, we are guided by our <span>ONE
                KBR Values:</span> <Link href="#">Learn More</Link>
                </p>

            </div>
            <div className='about-company2'>
                <h5>Fraud Alert</h5>
              
                <p>
                    Fraud has infiltrated the job placement market via the internet, email and direct phone contact. Attempts have included unauthorized use of KBR’s name and logo to solicit potential job seekers or to extend false job offers. Bad actors may mix in fake job advertisements with legitimate postings. These ads can include contact instructions and require job seekers to send sensitive personal information or money to pay for visa applications, processing fees, etc., in exchange for consideration for a high-paying position.
                    KBR will never ask for any sort of advance payment as part of the recruiting/hiring process. Candidate profiles are carefully managed to protect personal information.  If you experience fraud in a job offer, we encourage you to contact our KBR ethics hotline (fhoukbrcode@kbr.com) and report it to the Federal Trade Commission by clicking: 
                    <Link href="#">Here</Link>
                </p>

            </div>
        </div>
        {/* right jobs */}
        <div className='right-jobs'>
            <h1>Showing Search results for "process"</h1>
            <div className='jobs-items'>
                <div className='jobs-items-left'>
                    <h4 className='jobs-title'>
                        Principal Technical Professional - Process

                    </h4>
                    <div className='jobs-types'>
                        <ul>
                            <li>
                                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <span>Houston, Texas </span>
                            </li>
                            <li>
                                <span><i class="fa fa-th-large" aria-hidden="true"></i></span>
                                <span>Engineering, Technology </span>
                            </li>
                            <li>
                                <span>Full time</span>
                            </li>
                            <li>
                                <span>R2084398</span>
                            </li>
                            <li>
                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                <span>02/28/2024</span>
                            </li>
                        </ul>

                    </div>
                    <p>
                        Generate process design simulations utilizing software such as Aspen Plus, HYSYS, ProMax, or ProII. Analyze project, client, or technical supplier data to prepare relevant process engineering calculat...

                    </p>

                </div>
                <div className='jobs-items-right'>
                    <div>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <Link to="/jointalentcommunity/{id}" className='job-apply-btn'>Apply Now</Link>
                    </div>

                </div>

            </div>
            <div className='jobs-items'>
                <div className='jobs-items-left'>
                    <h4 className='jobs-title'>
                        Principal Technical Professional - Process

                    </h4>
                    <div className='jobs-types'>
                        <ul>
                            <li>
                                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <span>Houston, Texas </span>
                            </li>
                            <li>
                                <span><i class="fa fa-th-large" aria-hidden="true"></i></span>
                                <span>Engineering, & Science </span>
                            </li>
                            <li>
                                <span>Full time</span>
                            </li>
                            <li>
                                <span>R2084398</span>
                            </li>
                            <li>
                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                <span>02/28/2024</span>
                            </li>
                        </ul>

                    </div>
                    <p>
                        Generate process design simulations utilizing software such as Aspen Plus, HYSYS, ProMax, or ProII. Analyze project, client, or technical supplier data to prepare relevant process engineering calculat...

                    </p>

                </div>
                <div className='jobs-items-right'>
                    <div>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <Link to="/jointalentcommunity/{id}" className='job-apply-btn'>Apply Now</Link>
                    </div>

                </div>

            </div>
            <div className='jobs-items'>
                <div className='jobs-items-left'>
                    <h4 className='jobs-title'>
                        Principal Technical Professional - Process

                    </h4>
                    <div className='jobs-types'>
                        <ul>
                            <li>
                                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <span>Houston, Texas </span>
                            </li>
                            <li>
                                <span><i class="fa fa-th-large" aria-hidden="true"></i></span>
                                <span>Engineering, Technology, & Science</span>
                            </li>
                            <li>
                                <span>Full time</span>
                            </li>
                            <li>
                                <span>R2084398</span>
                            </li>
                            <li>
                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                <span>02/28/2024</span>
                            </li>
                        </ul>

                    </div>
                    <p>
                        Generate process design simulations utilizing software such as Aspen Plus, HYSYS, ProMax, or ProII. Analyze project, client, or technical supplier data to prepare relevant process engineering calculat...

                    </p>

                </div>
                <div className='jobs-items-right'>
                    <div>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <Link to="/jointalentcommunity/{id}" className='job-apply-btn'>Apply Now</Link>
                    </div>

                </div>

            </div>
            <div className='jobs-items'>
                <div className='jobs-items-left'>
                    <h4 className='jobs-title'>
                        Principal Technical Professional - Process

                    </h4>
                    <div className='jobs-types'>
                        <ul>
                            <li>
                                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <span>Houston, Texas </span>
                            </li>
                            <li>
                                <span><i class="fa fa-th-large" aria-hidden="true"></i></span>
                                <span>Technology, & Science </span>
                            </li>
                            <li>
                                <span>Full time</span>
                            </li>
                            <li>
                                <span>R2084398</span>
                            </li>
                            <li>
                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                <span>02/28/2024</span>
                            </li>
                        </ul>

                    </div>
                    <p>
                        Generate process design simulations utilizing software such as Aspen Plus, HYSYS, ProMax, or ProII. Analyze project, client, or technical supplier data to prepare relevant process engineering calculat...

                    </p>

                </div>
                <div className='jobs-items-right'>
                    <div>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <Link to="/jointalentcommunity/{id}" className='job-apply-btn'>Apply Now</Link>
                    </div>

                </div>

            </div>
            <div className='jobs-items'>
                <div className='jobs-items-left'>
                    <h4 className='jobs-title'>
                        Principal Technical Professional - Process

                    </h4>
                    <div className='jobs-types'>
                        <ul>
                            <li>
                                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <span>Houston, Texas </span>
                            </li>
                            <li>
                                <span><i class="fa fa-th-large" aria-hidden="true"></i></span>
                                <span>Engineering, Technology, & Science </span>
                            </li>
                            <li>
                                <span>Full time</span>
                            </li>
                            <li>
                                <span>R2084398</span>
                            </li>
                            <li>
                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                <span>02/28/2024</span>
                            </li>
                        </ul>

                    </div>
                    <p>
                        Generate process design simulations utilizing software such as Aspen Plus, HYSYS, ProMax, or ProII. Analyze project, client, or technical supplier data to prepare relevant process engineering calculat...

                    </p>

                </div>
                <div className='jobs-items-right'>
                    <div>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <Link to="/jointalentcommunity/{id}" className='job-apply-btn'>Apply Now</Link>
                    </div>

                </div>

            </div>
            <div className='jobs-items'>
                <div className='jobs-items-left'>
                    <h4 className='jobs-title'>
                        Principal Technical Professional - Process

                    </h4>
                    <div className='jobs-types'>
                        <ul>
                            <li>
                                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <span>Houston, Texas </span>
                            </li>
                            <li>
                                <span><i class="fa fa-th-large" aria-hidden="true"></i></span>
                                <span>Engineering, Technology, & Science </span>
                            </li>
                            <li>
                                <span>Full time</span>
                            </li>
                            <li>
                                <span>R2084398</span>
                            </li>
                            <li>
                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                <span>02/28/2024</span>
                            </li>
                        </ul>

                    </div>
                    <p>
                        Generate process design simulations utilizing software such as Aspen Plus, HYSYS, ProMax, or ProII. Analyze project, client, or technical supplier data to prepare relevant process engineering calculat...

                    </p>

                </div>
                <div className='jobs-items-right'>
                    <div>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <Link to="/jointalentcommunity/{id}" className='job-apply-btn'>Apply Now</Link>
                    </div>

                </div>

            </div>
            <div className='jobs-items'>
                <div className='jobs-items-left'>
                    <h4 className='jobs-title'>
                        Principal Technical Professional - Process

                    </h4>
                    <div className='jobs-types'>
                        <ul>
                            <li>
                                <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                                <span>Houston, Texas </span>
                            </li>
                            <li>
                                <span><i class="fa fa-th-large" aria-hidden="true"></i></span>
                                <span>Engineering, Technology, & Science</span>
                            </li>
                            <li>
                                <span>Full time</span>
                            </li>
                            <li>
                                <span>R2084398</span>
                            </li>
                            <li>
                                <span><i class="fa fa-calendar" aria-hidden="true"></i></span>
                                <span>02/28/2024 </span>
                            </li>
                        </ul>

                    </div>
                    <p>
                        Generate process design simulations utilizing software such as Aspen Plus, HYSYS, ProMax, or ProII. Analyze project, client, or technical supplier data to prepare relevant process engineering calculat...

                    </p>

                </div>
                <div className='jobs-items-right'>
                    <div>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <Link to="/jointalentcommunity/{id}" className='job-apply-btn'>Apply Now</Link>
                    </div>

                </div>

            </div>
        </div>
     </div>
        <Community/>
    </>
  );
}

export default Jobs; 
