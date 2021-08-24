import React from "react";

function Header(){
   
    return(
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="assets/images/favicon.png" alt="" srcset="" /><span>Pavo</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Details</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Article Details</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Terms Condition</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Privacy Policy</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" href="#">Download</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <div className="headerContent">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 headerLeft align-self-center">
                            <h1>Team management mobile application</h1>
                            <p>Start getting things done together with your team based on Pavo's revolutionary team management features</p>
                            <button className="downloadBtn-apple"><i class="fab fa-apple"></i> Download</button>
                            <button className="downloadBtn-play"><i class="fas fa-play"></i> Download</button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 headerRight">
                            <img src="assets/images/header-smartphone.png" alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <h3>Team management mobile apps don’t get better than Pavo. It’s probably the best app in the world for this purpose. Don’t hesitate to give it a try today and you will fall in love with it</h3>
             </div>
        </div>
    );
}

export default Header;