import "./AwanAcademy.css";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Banner from "../../Components/Banner/Banner.jsx";

// images
import bannerImg from "../../../public/assets/Initiatives/AwanAcademy/banner.png";

const AwanAcademy = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text="Awan Academy" />
      <div className="container-fluid initiativesTextContainer">
        <div className="container ">
          <div className="row">
            <div className="col-12 text-left mt-5 mb-5 ">
              <h2 className="initiativesTextH" id="initiativesH">AWAN ACADEMY</h2>
            </div>
            <div className="col-12">
              <p className="initiativesTextP">
                Partners-driven training solutions is an integral part of Awan
                Distribution strategy.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP">
                Awan Academy is an annual channel get-together offering our
                partner resellers / vendors knowledge-based workshops. The
                workshops review the latest technologies, trends and products,
                and how best to leverage them to create business opportunities.
                Awan Academy addresses top management and executives as the
                courseware caters for a broader picture of the industry.
                Challenges facing the partners are addressed and solutions are
                proposed thereto.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP">
                Training forums ran in Thailand, Azerbaijan, Pakistan, UAE and
                Spain.
              </p>
            </div>
            <div className="col-12">
              <p className="initiativesTextP">
                This Journey will continue to newer and farther destinations for
                the years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AwanAcademy;
