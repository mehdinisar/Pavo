import React from "react";

function Pricing() {
    var style = {
        background: "linear-gradient(rgba(50, 60, 70, 0.9), rgba(50, 60, 70, 0.9)), url('assets/images/pricing-background.jpg') center center no-repeat "
    }
    return(
        <div className="pricing" style={style}>
            <h1>Pricing options for all budgets</h1>
            <p>Our pricing plans are setup in such a way that any user can start enjoying Pavo without worrying <br />so much about costs. They are flexible and work for any type of industry</p>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="box">
                            <h3>STANDARD</h3>
                            <p className="dollar">$ <span>29</span><br /></p>
                            <p className="monthly">monthly</p>
                            <p className="content">This basic package covers the marketing needs of small startups</p>
                            <p className="icons">
                                <i class="fas fa-chevron-right"></i>List building and relations <br />
                                <i class="fas fa-chevron-right"></i>Seamless platform integration <br />
                                <i class="fas fa-chevron-right"></i>Great performance on devices <br />
                                <i class="fas fa-chevron-right"></i>Community support and videos
                           </p>
                           <button>Download</button>
                         </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="box">
                            <h3>STANDARD</h3>
                            <p className="dollar">$ <span>33</span><br /></p>
                            <p className="monthly">monthly</p>
                            <p className="content">This basic package covers the marketing needs of small startups</p>
                            <p className="icons">
                                <i class="fas fa-chevron-right"></i>List building and relations <br />
                                <i class="fas fa-chevron-right"></i>Seamless platform integration <br />
                                <i class="fas fa-chevron-right"></i>Great performance on devices <br />
                                <i class="fas fa-chevron-right"></i>Community support and videos
                           </p>
                           <button>Download</button>
                         </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="box">
                            <h3>STANDARD</h3>
                            <p className="dollar">$ <span>46</span><br /></p>
                            <p className="monthly">monthly</p>
                            <p className="content">This basic package covers the marketing needs of small startups</p>
                            <p className="icons">
                                <i class="fas fa-chevron-right"></i>List building and relations <br />
                                <i class="fas fa-chevron-right"></i>Seamless platform integration <br />
                                <i class="fas fa-chevron-right"></i>Great performance on devices <br />
                                <i class="fas fa-chevron-right"></i>Community support and videos
                           </p>
                           <button>Download</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Pricing;