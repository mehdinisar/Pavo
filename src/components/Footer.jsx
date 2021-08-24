import React from "react";
function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <h4>Pavo is a mobile application for marketing automation and you can reach the team at email@domain.com</h4>
                <p><i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>          
                </p>
                <div className="footerLinks">
                    <div className="links">
                        <div className="row">
                            <div className="col-lg-6">
                                <p className="linksA">
                                    <a href="#">Article Details</a>
                                    <a href="#">Terms & Condition</a>
                                    <a href="#">Privacy Policy</a>
                                    
                                </p>
                            </div>
                            <div className="col-lg-6">
                                <p className="fCopy">
                                    Copyright © Your name
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;