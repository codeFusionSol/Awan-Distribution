import "./RehabilitationCenter.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Banner from "../../Components/Banner/Banner.jsx";

// images
import bannerImg from "../../../public/assets/Initiatives/RehabilitationCenter/banner.png";

const RehabilitationCenter = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text="Rehabilitation Center" />
      <div className="container-fluid initiativesTextContainer">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-center mt-5 mb-5 ">
              <h2 className="initiativesTextH" id="initiativesH">
                SEYADA REHABILITATION CENTER
              </h2>
            </div>

            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Occupational Therapy
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Sensory Integration
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Feeding Therapy
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Autism Therapy
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Physical Therapy
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Group Therapy
              </p>
            </div>
            <br />
            <br />
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Speech sound production errors
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Child language delay childhood apraxia of speech
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Stuttering and fluency disorders
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Oral motor disorders
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Speech and language problems associated with hearing
                impairment
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Speech & language problems resulting from brain injury or
                neurodevelopmental disability
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Speech production errors resulting from craniofacial
                abnormalities
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP" id="initiativesTextPLi">
                - Accent modifications
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RehabilitationCenter;
