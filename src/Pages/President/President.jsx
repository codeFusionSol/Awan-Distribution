import "./President.css";

import Topbar from "../../Components/Topbar/Topbar.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ImgWithText from "../../Components/ImgWithText/ImgWithText.jsx";

// images
import img from "../../../public/assets/About/President/img.png";
import bannerImg from "../../../public/assets/About/President/banner.png";

const President = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text={"President & CEO Message"} />
      <ImgWithText
        heading={""}
        img={img}
        p1={
          "We offer the channel a host of value added solutions through Awan services, training, development and Awan POC (Proof of Concept) & Excellence Centres."
        }
        p2={
          "Customized cloud, enterprise and security solutions are on hand offered by our experienced team members to suit the carefully scrutinized customers requirements."
        }
        p3={
          "On behalf of our teams in Awan Distribution & Awan El Khair, we remain committed to our mission statement of being a truly People's Organization, where humanity comes as our number one core value."
        }
        president={"Essam Baghdady"}
        ceo={"Rizwan Ahmed"}
      />
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default President;
