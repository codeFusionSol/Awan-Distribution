import "./Recognition.css";
import img1 from "../../../public/assets/Recognition/1.png";
import img2 from "../../../public/assets/Recognition/2.png";
import img3 from "../../../public/assets/Recognition/3.png";
import RecognitionCard from "../RecognitionCard/RecognitionCard";

const Recognition = () => {
  const cardsData = [
    {
      img: img1,
      heading: "Achievements and Awards",
      p: "Explore our journey of excellence through a showcase of our noteworthy achievements and prestigious awards. Discover the milestones that define our commitment to excellence and innovation.",
    },

    {
      img: img2,
      heading: "Publications",
      p: "Dive into our library of insightful publications, where we share our expertise and knowledge with the world. From research papers to thought leadership articles, explore the wealth of information we've curated.",
    },

    {
      img: img3,
      heading: "Global Geo Coverage",
      p: "Witness our global footprint as we extend our reach far and wide. Learn about our presence in different corners of the world and how we're making a positive impact on a global scale.",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center ">
          <span style={{ borderBottom: "3px solid var(--border-color)" }}>
            Reco
          </span>
          <span style={{ border: "none !important" }}>gnition and Reach </span>
        </h3>
      </div>

      <div className="row mt-3">
        <div className="col-12">
          <p className="text-center">
            Discover our notable accomplishments and accolades in "Achievements
            and Awards," delve into our insightful "Publications," and explore
            our "Global Coverage" to see how we're making an impact on a global
            scale.
          </p>
        </div>
      </div>
      <br />

      <div className="row">
        {cardsData.map((data, index) => (
          <div
            className="col-lg-4  col-12 mt-lg-0 mt-4 d-flex justify-content-center align-items-center  "
            key={index}
          >
            <RecognitionCard data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recognition;
