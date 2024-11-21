import "./Footer.css";
import logo from "../../../public/assets/Navbar/logo.png";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footerContainerFluid">
        <div className="container">
          <div className="row pt-4 pb-5">
            <div className="col-md-5 col-12">
              <img src={logo} className="footerLogo" alt="" />
              <p className="footerPara">
                Awan started in 2010, in Egypt and Pakistan as a philanthropic
                undertaking with a team of IT professionals recognizing the
                value of People as the key asset and ultimate objective of any
                enterprise.
              </p>
            </div>
            <div className="offset-md-1 mt-md-0 mt-4 col-md-3 col-12">
              <h5 className="footerMiddleHeading">Services</h5>

              <p className="footerMiddlePara">Training Facilities</p>
              <p className="footerMiddlePara">Professional Services</p>
            </div>
            <div className="col-md-3 mt-md-0 mt-4 col-12">
              <h5 className="footerMiddleHeading">Services</h5>

              <p className="footerMiddlePara">Overview</p>
              <p className="footerMiddlePara">Mission & Vission</p>
              <p className="footerMiddlePara">President & CEO Message</p>
              <p className="footerMiddlePara">Privacy Policy</p>
              <p className="footerMiddlePara">Contact Us</p>
              <p className="footerMiddlePara">Career</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid footerBottom">
        <div className="container ">
          <div className="row ">
            <div className="col-12 footerBottomContainer">
              <p className="footerPara">Copyright © 2024 Awan Distribution. All rights reserved.</p>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
