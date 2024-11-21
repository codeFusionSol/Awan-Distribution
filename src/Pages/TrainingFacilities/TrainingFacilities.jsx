import "./TrainingFacilities.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ImgWithText from "../../Components/ImgWithText/ImgWithText.jsx";

// image
import img from "../../../public/assets/services/TrainingFacilities/img.png";
import bannerImg from "../../../public/assets/services/TrainingFacilities/banner.png";
const TrainingFacilities = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text="Training Facilities" />

      <ImgWithText
        heading="Training Facilities"
        p1="Awan Distribution is an effective and affordable platform that provide vendor-authorized training, executive and skill development training. Our training courses are designed for IT solution providers and end-user technical staff and we believe that, resellers with certified staff can sell opportunities sized 4 times larger."
        img={img}
      />

      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default TrainingFacilities;
