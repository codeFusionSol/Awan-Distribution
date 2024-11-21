import "./Career.css";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

// image
import bannerImg from "../../../public/assets/About/Career/banner.png";
import JobForm from "../../Components/JobForm/JobForm.jsx";

const Career = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text="Career" />
      <br />
      <br />

      <div className="container-fluid careerForm">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col-12">
            <h3 className="text-center careerFromH">Job Application</h3>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="container">
          <div
            className="row"
            style={{ backgroundColor: "#D9D9D9", padding: "20px" }}
          >
            <JobForm />
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Career;
