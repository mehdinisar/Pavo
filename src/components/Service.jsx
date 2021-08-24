import React from "react";

function Service(props){
    return(
        <div className="col-lg-4 col-md-4 col-sm-12 service-col">
            <div className="service">
                <img src={"assets/images/"+props.img} alt="" />
                <h3>{props.heading}</h3>
                <p>{props.txt}</p>
            </div>
        </div>
    );
}
export default Service;