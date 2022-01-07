
import React from 'react'
import Slider from "react-slick";

export default function MachineHeaderSlider() {
 
    const settings = {
    
        dots: false,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        // autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnHover: true
      };
    return (
      <>
   <div style={{backgroundColor:"#ed5922"}}>
      
        <Slider {...settings}>
          <div className="owcrusl h4 a" >
            <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
          <div className="owcrusl h4 a">
           <h4 ><a href="">Sample</a> </h4>
          </div>
        </Slider>
      </div>
      </>
    )
}
