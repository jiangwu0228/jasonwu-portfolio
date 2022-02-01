import React from "react";
import "./testimonials.scss";
import { testimonialsData } from "../../lib/dataList";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialsData.map((testimonial) => (
            <div className={testimonial.featured? "card featured" : "card"}>
              <div className="top">
                <img src="assets/right-arrow.png" className="left" alt="" />
                <img src={testimonial.img} className="user" alt="" />
                <img src={testimonial.icon} className="right" alt="" />
              </div>
                <div className="center">{testimonial.desc}</div>
                <div className="bottom">
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.title}</h4>
                </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Testimonials;
