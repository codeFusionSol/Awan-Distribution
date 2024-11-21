import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import ImgWithText from "../../Components/ImgWithText/ImgWithText";
import Navbar from "../../Components/Navbar/Navbar";
import Topbar from "../../Components/Topbar/Topbar";
import "./Overview.css";

// images
import bannerImg from "../../../public/assets/About/Overview/banner.png";
import img from "../../../public/assets/About/Overview/img.png";

const Overview = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text={"Overview"} />
      <ImgWithText
        heading={"Overview"}
        img={img}
        p1={
          "Awan started in 2010, in Egypt and Pakistan as a philanthropic undertaking with a team of IT professionals recognizing the value of People as the key asset and ultimate objective of any enterprise."
        }
        p2={
          "Extending the same concept to the distribution arena, Awan distribution is established by the same team, with a profound knowledge and understanding of what makes Distribution an added value in deeds & not just words."
        }
        p3={
          "Between them, the founding team members have decades of IT distribution knowledge and have already established more than ten full -fledged distribution subsidiaries."
        }
      />
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Overview;
