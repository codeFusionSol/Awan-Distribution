import React, { useEffect, useState } from "react";
import "./CarusolSlider.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// images
import img1 from "../../../public/assets/Carusol-Slider/1.png";
import img2 from "../../../public/assets/Carusol-Slider/2.png";
import img3 from "../../../public/assets/Carusol-Slider/3.png";
import img4 from "../../../public/assets/Carusol-Slider/4.png";
import img5 from "../../../public/assets/Carusol-Slider/5.png";
import img6 from "../../../public/assets/Carusol-Slider/6.png";

const CarusolSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const items = [
    {
      img: img1,
      text: "Cyber Security",
    },
    {
      img: img2,
      text: "Data Management & Protection",
    },
    {
      img: img3,
      text: "Enterprise Server Systems",
    },
    {
      img: img4,
      text: "Enterprise Storage Systems",
    },
    {
      img: img5,
      text: "End Computing Hardware & Software",
    },
    {
      img: img6,
      text: "Virtual Data Center Solution",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else {
        setItemsPerSlide(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="container-fluid carouselSliderContainer">
        <br />
        <br />
        <br />
        <div className="container ">
          <h3 className="text-center">
            <span style={{ borderBottom: "3px solid var(--border-color)" }}>
              Tech
            </span>
            <span style={{ border: "none !important" }}>nology Coverage </span>
          </h3>
        </div>

        <div className="col-6 py-1 text-left lead carusolSliderBtnDiv">
          <button
            className="btn carusolSliderBtn prev"
            id="carusolSliderBtn1"
            onClick={prevSlide}
          >
            <KeyboardArrowLeftIcon className="carusolSliderBtnIcon" />
          </button>
        </div>
        <div className="col-6 py-1 text-end lead carusolSliderBtnDiv">
          <button
            className="btn carusolSliderBtn next"
            id="carusolSliderBtn2"
            onClick={nextSlide}
          >
            <KeyboardArrowRightIcon className="carusolSliderBtnIcon" />
          </button>
        </div>
        <section className="carousel slide py-4" id="postsCarousel">
          <div className="container pt-0 mt-2 carousel-inner">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className={`carousel-item ${
                  slideIndex === currentIndex ? "active" : ""
                }`}
              >
                <div className="row">
                  {items
                    .slice(
                      slideIndex * itemsPerSlide,
                      slideIndex * itemsPerSlide + itemsPerSlide
                    )
                    .map((item, itemIndex) => (
                      <div
                        className="col-md-4"
                        style={{ height: "max-content" }}
                        key={itemIndex}
                      >
                        <div
                          className="card h-100"
                          style={{ position: "relative" }}
                        >
                          <div className="card-img-top ">
                            <img
                              className="img-fluid"
                              src={item.img}
                              alt={`Carousel ${itemIndex + 1}`}
                              style={{ height: "100%", objectFit: "cover" }}
                            />
                          </div>
                          <div
                            className="card-body w-100 h-100 p-t-2 d-flex justify-content-center align-items-center"
                            style={{ position: "absolute" }}
                          >
                            <h1
                              className="small text-wide p-b-2"
                              style={{
                                color: "var(--white-color)",
                                fontSize: "20px",
                                textAlign: "center",
                              }}
                            >
                              {item.text}
                            </h1>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default CarusolSlider;
