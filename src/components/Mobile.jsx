import React from "react";
function Mobile() {
    return( 
        <div className="mobile">
            <div className="container">
            <div className="row instantResults">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <img src="assets/images/conclusion-smartphone.png" alt="" />
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
                                <button className="downloadBtn-apple"><i class="fab fa-apple"></i> Download</button>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <button className="details-Btn"><i class="fas fa-play"></i> Download</button>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
}
export default Mobile;















