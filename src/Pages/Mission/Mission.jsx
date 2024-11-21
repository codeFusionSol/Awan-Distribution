import "./Mission.css";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

// image
import bannerImg from "../../../public/assets/About/Mission/banner.png";
import img from "../../../public/assets/About/Mission/img.png";

const Mission = () => {
  const cardData = [
    {
      h: "Customers",
      p: "To be an advocate of our customer by representing their interests through understanding their needs and offering the best possible solutions and service.",
    },
    {
      h: "Products & Services",
      p: "To offer unique, top-quality products and services which encompass qualitative technology provided by state-of-the-art technicians who both consult and work hard and enthusiastically to achieve superior solutions to customer needs.",
    },
    {
      h: "Organization",
      p: "To aspire always for improvement, innovation and record-breaking achievements by perfecting methods and behaviors through constructive criticism.",
    },
    {
      h: "Community",
      p: "To take pride in being part of society, contributing to the growth of the country’s economy in which we operate, and giving back to the less fortunate and building a just and strong society.",
    },
    {
      h: "Geography",
      p: "Our 2016  plan provides for the establishment of subsidiaries and offices in Pakistan , Afghanistan, UAE, Bangladesh and Singapore, along with an Egypt -based Training Center.Moving forward,  Myanmar, Sri-lanka and Brunei are very much part of our ambitious expansion plan.",
      marginBottom: 0,
    },
  ];
  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text="Our Mission & Vision" />
      <br />
      <br />

      <div className="container">
        <div className="row p-0" style={{ padding: "0 !important" }}>
          <div className="col-lg-5 col-12 p-4 longCard">
            <img src={img} width="100%" alt="" />
            <h3 className="longCardH">Awan is Primarily a People's Company</h3>
            <p className="longCardP">
              We believe that investing in people, is what is missing in the
              current channel which is driven mainly by numbers: customers
              ,human resources and vendors are treated as statistics, which is
              not the best success formula in our region.
            </p>
            <p className="longCardP">
              Growth in revenues and channel penetration will occur only through
              a better assimilation of cultures and a profound understanding of
              the needs of customers, resellers and vendors as our most valuable
              assets.
            </p>
          </div>
          <div className="col-lg-6 col-12 m-0 ps-lg-4 p-0">
            <div className="row p-0">
              {cardData.map((item, index) => {
                return (
                  <div
                    className="col-12 mx-0 rightSideCard "
                    style={{ marginBottom: item.marginBottom }}
                  >
                    <h4 className="rightSideCardH">{item.h}</h4>
                    <p className="rightSideCardP">{item.p}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />

      <Footer />
    </>
  );
};

export default Mission;
