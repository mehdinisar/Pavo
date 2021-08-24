import React from "react";
import Service from "./Service";

function Services(){
    return(
        <div className="services">
            <div className="container">
                <div class="row">
                    <Service img="features-icon-1.svg" heading="Platform Integration" txt="You sales force can use the app on any smartphone platform without compatibility issues" />
                    <Service img="features-icon-2.svg" heading="Easy On Resources" txt="Works smoothly even on older generation hardware due to our optimization efforts" />
                    <Service img="features-icon-3.svg" heading="Great Performance" txt="Optimized code and innovative technology insure no delays and ultra-fast responsiveness" />
                    <Service img="features-icon-4.svg" heading="Multiple Languages" txt="Choose from one of the 40 languages that come pre-installed and start selling smarter" />
                    <Service img="features-icon-5.svg" heading="Free Updates" txt="Don't worry about future costs, pay once and receive all future updates at no extra cost" />
                    <Service img="features-icon-6.svg" heading="Community Support" txt="Register the app and get acces to knowledge and ideas from the Pavo online community" />
                 </div>
            </div>
            <div className="container service-Bottom">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                        <h2>Results driven ground breaking technology</h2>
                        <p>Based on our team's extensive experience in developing line of business applications and constructive customer feedback we reached a new level of revenue.
                        <br /><br /> We enjoy helping small and medium sized tech businesses take a shot at established Fortune 500 companies</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="assets/images/details-1.jpg" alt="" />
                    </div>
                </div>
                <div className="row instantResults">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="assets/images/details-2.jpg" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                        <h2>Instant results for the marketing department</h2>
                        <p>
                            <i class="fas fa-chevron-right"></i> Features that will help you and your marketers <br />
                            <i class="fas fa-chevron-right"></i> Smooth learning curve due to the knowledge base <br />
                            <i class="fas fa-chevron-right"></i> Ready out-of-the-box with minor setup settings
                        </p>
                        <div className="btns row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <button className="downloadBtn-apple">Lightbox</button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <button className="details-Btn">Details</button>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
                        <h2>Platform integration and life time free updates</h2>
                        <p>Get a glimpse of what this app can do for your marketing automation and understand why current users are so excited when using Pavo together with their teams.
                        <br /><br />We will promptly answer any questions and honor your requests based on the service level agreement</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="assets/images/details-3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;