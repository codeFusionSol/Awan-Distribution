import "./Contact.css";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Banner from "../../Components/Banner/Banner.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

// images
import bg from "../../../public/assets/About/Contact/bg.png";
import bannerImg from "../../../public/assets/About/Contact/bannerImg.png";
import flag1 from "../../../public/assets/About/Contact/pak.png";
import flag2 from "../../../public/assets/About/Contact/singapore.png";
import flag3 from "../../../public/assets/About/Contact/uae.png";
import flag4 from "../../../public/assets/About/Contact/afghan.png";

import locationIcon from "../../../public/assets/Icon/location.png";
import phoneIcon from "../../../public/assets/Icon/call.png";
import emailIcon from "../../../public/assets/Icon/message.png";
import { useEffect, useState } from "react";

const Contact = () => {
  const [selectedFlag, setSelectedFlag] = useState("Pakistan");
  const [filteredOffices, setFilteredOffices] = useState([]);

  const flags = [
    {
      img: flag1,
      name: "Pakistan",
    },
    {
      img: flag2,
      name: "Singapore",
    },
    {
      img: flag3,
      name: "UAE",
    },
    {
      img: flag4,
      name: "Afghanistan",
    },
  ];

  const officeDetails = [
    {
      h2: "Karachi Office",
      location:
        "Plot No. 3, Service Road North, Opposite NESCOM Officer Club I-11/3 Islamabad.",
      phone: "+92 (213) 2786 675 - 80",
      email: "info@awandistribution.com",
      country: "Pakistan",
    },
    {
      h2: "Islamabad Office",
      location:
        "Plot No. 3, Service Road North, Opposite NESCOM Officer Club I-11/3 Islamabad.",
      phone: "+92 (51) 8738 040 - 41",
      email: "info@awandistribution.com",
      country: "Pakistan",
    },
    {
      h2: "Lahore Office",
      location:
        "FB-4 2nd Floor Awami Complex,Usman Block,New garden Town, Lahore.",
      phone: "+92 (42) 3519 8471 - 72",
      email: "info@awandistribution.com",
      country: "Pakistan",
    },
    {
      h2: "Peshawar Office",
      location:
        "Office # 406 4th floor sheikh Yaseen tower University Peshawar.",
      phone: "+92 (91) 5841 139",
      email: "info@awandistribution.com",
      country: "Pakistan",
    },
    {
      h2: "UAE Office",
      location:
        "P5-ELOB Office No, E-20F-34, Hamriyah Free Zone Sharjah,PO Box 50922, United Arab Emirates",
      phone: "+971 (50) 8737  630",
      email: "info@awandistribution.com",
      country: "UAE",
    },
    {
      h2: "Singapore Office",
      location:
        "60 Paya Lebar Road # 12-55, Paya Lebar Square, Singapore (409051)",
      phone: "+971 (50) 8737  630",
      email: "info@awandistribution.com",
      country: "Singapore",
    },
    {
      h2: "UAE Office",
      location: "Apartment #10 floor 12,  Bakhtwar plaza, shahr naw,Kabul",
      phone: "+971 (50) 8737  630",
      email: "info@awandistribution.com",
      country: "Afghanistan",
    },
  ];

  useEffect(() => {
    const filtered = officeDetails.filter(
      (item) => item.country === selectedFlag
    );
    setFilteredOffices(filtered);
  }, [selectedFlag]);

  return (
    <>
      <Topbar />
      <Navbar />
      <Banner img={bannerImg} text="Contact Us" />
      <div
        className="container-fluid py-5"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            {flags.map((flag, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#D9D9D9",
                  cursor: "pointer",
                  width: "24% !important",
                }}
                onClick={() => setSelectedFlag(flag.name)}
                className="col-lg-2 mx-5 py-3 px-5 d-flex justify-content-between mb-3 align-items-center flex-column"
              >
                <img
                  className={`mt-2 d-flex justify-content-center align-items-center mx-auto contactFlagImg ${
                    selectedFlag === flag.name ? "contactFlagImgWithColor" : ""
                  }`}
                  src={flag.img}
                  width="100px"
                  alt={flag.name}
                />
                <p
                  className="mt-2 text-center w-100"
                  style={{ fontWeight: "bold" }}
                >
                  {flag.name}
                </p>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="row mt-4">
                {filteredOffices.map((item, index) => (
                  <div
                    key={index}
                    className="col-12 mb-4 p-lg-4 p-2"
                    style={{ backgroundColor: "#ECECEC" }}
                  >
                    <h2 className="contactCardH">{item.h2}</h2>
                    <div className="d-flex justify-content-start align-items-start">
                      <img src={locationIcon} width="25px" alt="" />
                      <p className="contactCardp">{item.location}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-start mt-3">
                      <img src={phoneIcon} width="25px" alt="" />
                      <p className="contactCardp">{item.phone}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-start mt-3">
                      <img src={emailIcon} width="25px" alt="" />
                      <p className="contactCardp">{item.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-12 mb-4">
              <div className="row mt-4">
                <div
                  className="col-12 p-4"
                  style={{ backgroundColor: "#ECECEC" }}
                >
                  <h2 className="contactCardH contactCardH2">Contact us</h2>
                  <form>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="contactInput"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="contactInput"
                    />
                    <input
                      type="tell"
                      placeholder="Phone"
                      className="contactInput"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="contactInput"
                    />
                    <textarea
                      placeholder="Message"
                      className="contactTextArea"
                    ></textarea>
                    <button className="sendBtn">Send</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
