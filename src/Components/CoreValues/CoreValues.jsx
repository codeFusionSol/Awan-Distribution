import "./CoreValues.css";

import img1 from "../../../public/assets/CoreValues/1.png";
import img2 from "../../../public/assets/CoreValues/2.png";
import img3 from "../../../public/assets/CoreValues/3.png";
import img4 from "../../../public/assets/CoreValues/4.png";
import img5 from "../../../public/assets/CoreValues/5.png";
import img6 from "../../../public/assets/CoreValues/6.png";
import img7 from "../../../public/assets/CoreValues/7.png";
import img8 from "../../../public/assets/CoreValues/8.png";
import img9 from "../../../public/assets/CoreValues/9.png";
import img10 from "../../../public/assets/CoreValues/10.png";

const CoreValues = () => {
  const line1CardsData = [
    {
      img: img1,
      text: "Humanity",
      width: 110,
    },
    {
      img: img2,
      text: "Inclusiveness",
    },
    {
      img: img3,
      text: "Versatility",
    },
    {
      img: img4,
      text: "Sustainability",
    },
    {
      img: img5,
      text: "Corporate Governance",
      fontSize: "14px",
    },
  ];

  const line2CardsData = [
    {
      img: img6,
      text: "Social Responsibility",
    },
    {
      img: img7,
      text: "Knowledge / Value Centricity",
      fontSize: "14px",
    },
    {
      img: img8,
      text: "Integrity",
    },
    {
      img: img9,
      text: "Loyalty",
    },
    {
      img: img10,
      text: "Creativity",
    },
  ];

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        {line1CardsData.map((data, index) => (
          <div className="col-lg-2 col-md-3 col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center">
            <img
              className="CoreValuesImg"
              src={data.img}
              width={data.width || 120}
            />
            <span
              className="CoreValuesSpan"
              style={{ fontSize: data.fontSize || "16px" }}
            >
              {data.text}
            </span>
          </div>
        ))}
      </div>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        {line2CardsData.map((data, index) => (
          <div className="col-lg-2 col-md-3 col-sm-6 col-12 d-flex flex-column justify-content-center align-items-center">
            <img
              className="CoreValuesImg"
              src={data.img}
              width={data.width || 120}
            />
            <span
              className="CoreValuesSpan"
              style={{ fontSize: data.fontSize || "16px" }}
            >
              {data.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
