import "./CardSlider.css";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState, useEffect, useRef } from "react";

// Images
import img1 from "../../../public/assets/CardSlider/1.svg";
import img2 from "../../../public/assets/CardSlider/2.svg";
import img3 from "../../../public/assets/CardSlider/3.svg";
import img4 from "../../../public/assets/CardSlider/4.svg";
import img5 from "../../../public/assets/CardSlider/5.svg";

const images = [img1, img2, img3, img4, img5]; // Array of image imports

const CardSlider = () => {
  const [active, setActive] = useState(2); // Start with the 3rd image
  const sliderRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = sliderRef.current.querySelectorAll(".item");
    loadShow();

    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    const handleNext = () => {
      setActive((prevActive) =>
        Math.min(prevActive + 1, itemsRef.current.length - 1)
      );
    };

    const handlePrev = () => {
      setActive((prevActive) => Math.max(prevActive - 1, 0));
    };

    next.addEventListener("click", handleNext);
    prev.addEventListener("click", handlePrev);

    return () => {
      next.removeEventListener("click", handleNext);
      prev.removeEventListener("click", handlePrev);
    };
  }, []);

  useEffect(() => {
    loadShow();
  }, [active]);

  function loadShow() {
    let stt = 0;
    itemsRef.current[active].style.transform = `none`;
    itemsRef.current[active].style.zIndex = 1;
    itemsRef.current[active].style.filter = "none";
    itemsRef.current[active].style.opacity = 1;
    for (let i = active + 1; i < itemsRef.current.length; i++) {
      stt++;
      itemsRef.current[i].style.transform = `translateX(${100 * stt}px) scale(${
        1 - 0.2 * stt
      }) `;
      itemsRef.current[i].style.zIndex = -stt;
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      itemsRef.current[i].style.transform = `translateX(${
        -100 * stt
      }px) scale(${1 - 0.2 * stt}) `;
      itemsRef.current[i].style.zIndex = -stt;
    }
  }

  return (
    <div className="slider" ref={sliderRef}>
      {images.map((img, i) => (
        <div className="item" key={i}>
          <img
            src={img}
            alt={`Slide ${i + 1}`}
            style={{ width: "100%", height: "100%", borderRadius: "25px" }}
          />
        </div>
      ))}
      <button id="next">
        <KeyboardArrowRightIcon className="cardSliderArrow" />
      </button>
      <button id="prev">
        <KeyboardArrowLeftIcon className="cardSliderArrow" />
      </button>
    </div>
  );
};

export default CardSlider;
