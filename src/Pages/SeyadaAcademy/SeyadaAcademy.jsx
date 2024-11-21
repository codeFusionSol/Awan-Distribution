import "./SeyadaAcademy.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Banner from "../../Components/Banner/Banner.jsx";

// images
import bannerImg from "../../../public/assets/Initiatives/SeyadaAcademy/banner.png";

const SeyadaAcademy = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text="Seyada Academy" />
      <div className="container-fluid initiativesTextContainer">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center mt-5 mb-5 ">
              <h2 className="initiativesTextH" id="initiativesH">
                Seyada Academy
              </h2>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLiH">
                Established in 2017 and currently hosting close to 300 abled
                children and children of determination, Seyada Academy started
                with inclusiveness as a core value, integrating hearing impaired
                children with abled children.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                Qualified and experienced faculty.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                Full schooling academy up to grade 10.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                Shadow teaching for challenged children.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                Innovative and diverse teaching methods.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                Personal and intensive care for slow learners.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                Activity based learning.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                Multimedia equipped auditorium.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                Computer and science labs.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                Library and play areas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SeyadaAcademy;
