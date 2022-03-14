import "./carousel.css";
import { carouselList } from "../../data/carousel-list";
import { useState } from "react";
import { Link } from "react-router-dom";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const SlideSetter = () => {
    if (activeIndex === carouselList.length) setActiveIndex(0);
    if (activeIndex !== carouselList.length) setActiveIndex(activeIndex + 1);
    if (activeIndex === 2) setActiveIndex(0);
  };

  return (
    <>
      <div className="carousel">
        <div className="owl-carousel-btn prev" onClick={SlideSetter}>
          <i className="fas fa-2x fa-chevron-circle-left"></i>
        </div>
        <div className="owl-carousel-btn next" onClick={SlideSetter}>
          <i className="fas fa-2x fa-chevron-circle-right"></i>
        </div>
        <ul>
          {carouselList.map((item, index) => {
            return (
              <li
                className={
                  index === activeIndex
                    ? "slide shadow-box data-active"
                    : "slide shadow-box"
                }
                key={item.id}
              >
                <div className="grid-2-cols-layout">
                  <div className="left-pane">
                    <img
                      src={item.image}
                      alt="painting"
                      className="img-responsive"
                    />
                  </div>
                  <div className="right-pane centered vertical-direction">
                    <h2 className="mb-lg font1">{item.name}</h2>
                    <p className="font2 text-secondary">
                      Starting at{" "}
                      <span className="text-vibrant">₹{item.minPrice}</span>.
                    </p>
                    <strike>₹{item.originalPrice}</strike>
                    <span className="text-success font4 mb-lg">50% off</span>
                    <Link
                      to="/products"
                      className="reset decor-none bg-secondary light-text padding-sm rm-border"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export { Carousel };
