import "./AwanElKhair.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Banner from "../../Components/Banner/Banner.jsx";

// images
import bannerImg from "../../../public/assets/Initiatives/AwanALKhair/banner.png";

const AwanElKhair = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text="Awan el Khair" />
      <div className="container-fluid initiativesTextContainer">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center mt-5 ">
              <h2 className="initiativesTextH">AWAN EL KHAIR</h2>
            </div>
            <div className="col-12">
              <span className="initiativesTextSpan">
                Together we can develop the ability
              </span>
            </div>
            <div className="col-12">
              <p className="initiativesTextP">Awan El Khair Egypt</p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP">
                Inaugurated in Egypt in 2011 as an NGO, Awan El Khair is a home
                for children abandoned by their biological parents. We like to
                think of Awan as a home rather than an orphanage as we provide a
                home for our children fully aware that what children need most
                is the security and love that should be provided through
                parental support. 
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP">
                Special care is given to education, language skills and
                extra-curricular activities e.g. art, music, ballet, scouting,
                to name a few of our scheduled agenda. 
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP">
                Our team in Egypt works with other orphanages that are lacking
                in resources to assist as much as possible in sharing our vision
                and resources.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AwanElKhair;
