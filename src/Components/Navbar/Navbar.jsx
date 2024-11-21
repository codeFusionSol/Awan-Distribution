import "./Navbar.css";
import logo from "../../../public/assets/Navbar/logo.png";
import bigLogo from "../../../public/assets/Navbar/big logo.svg";
import NavbarButton from "../NavbarButton/NavbarButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { Link } from "react-router-dom";

// vindors icon
import img1 from "../../../public/assets/Navbar/vindersIcon/1.png";
import img2 from "../../../public/assets/Navbar/vindersIcon/2.png";
import img3 from "../../../public/assets/Navbar/vindersIcon/3.png";
import img4 from "../../../public/assets/Navbar/vindersIcon/4.png";
import img5 from "../../../public/assets/Navbar/vindersIcon/5.png";
import img6 from "../../../public/assets/Navbar/vindersIcon/6.png";
import img7 from "../../../public/assets/Navbar/vindersIcon/7.png";
import img8 from "../../../public/assets/Navbar/vindersIcon/8.png";
import img9 from "../../../public/assets/Navbar/vindersIcon/9.png";
import img10 from "../../../public/assets/Navbar/vindersIcon/10.png";
import img11 from "../../../public/assets/Navbar/vindersIcon/11.png";
import img12 from "../../../public/assets/Navbar/vindersIcon/12.png";
import img13 from "../../../public/assets/Navbar/vindersIcon/13.png";
import img14 from "../../../public/assets/Navbar/vindersIcon/14.png";
import img15 from "../../../public/assets/Navbar/vindersIcon/15.png";
import img16 from "../../../public/assets/Navbar/vindersIcon/16.png";
import img17 from "../../../public/assets/Navbar/vindersIcon/17.png";

const Navbar = () => {
  const vendors = [
    {
      img: img1,
      location: "hewlett",
    },
    {
      img: img2,
      location: "microsoft",
    },
    {
      img: img3,
      location: "kaspersky",
    },
    {
      img: img4,
      location: "micro",
    },
    {
      img: img5,
      location: "aruba",
    },
    {
      img: img6,
      location: "sangoma",
    },
    {
      img: img7,
      location: "oracle",
    },
    {
      img: img8,
      location: "hbc",
    },
    {
      img: img9,
      location: "redhat",
    },
    {
      img: img10,
      location: "veeam",
    },
    {
      img: img11,
      location: "f5",
      width: "90px",
    },
    {
      img: img12,
      location: "strke",
    },
    {
      img: img13,
      location: "huawei",
    },
    {
      img: img14,
      location: "rapid",
    },
    {
      img: img15,
      location: "panduit",
    },
    {
      img: img16,
      location: "sophos",
    },
    {
      img: img17,
      location: "sitrix",
    },
  ];

  const aboutDropDownText = [
    {
      h5: "Overview",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "overview",
    },
    {
      h5: "Mission & Vission",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "mission",
    },
    {
      h5: "President & CEO Message",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "president",
    },
    {
      h5: "Privacy Policy",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "privacy",
    },
    {
      h5: "Contact Us",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "contact",
    },
    {
      h5: "Career",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "career",
    },
  ];

  const InitiativesDropDownText = [
    {
      h5: "Achievement ",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "achievement",
    },
    {
      h5: "Awan Al Khair",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "awan-al-khair",
    },
    {
      h5: "Awan Academy",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "awan-academy",
    },
    {
      h5: "Seyada Academy",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "seyada-academy",
    },
    {
      h5: "CSR Activities",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "csr-activities",
    },
    {
      h5: "Seyada Rehabilitation Center",
      p: "Awan Distribution has a team of qualified resources focused on providing comprehensive ...",
      location: "rehabilitation-center",
    },
  ];
  const [serviceDropDown, setServiceDropDown] = useState(false);
  const [vendorsDropDown, setVendorsDropDown] = useState(false);
  const [aboutDropDown, setAboutDropDown] = useState(false);
  const [initiativesDropDown, setInitiativesDropDown] = useState(false);

  return (
    <>
      <div className="container-fluid navbarContainerFluid py-0 ">
        <div className="container navbarContainer py-0">
          <nav className="navbar navbar-expand-lg py-0">
            <div className="container-fluid h-100">
              <Link to={"/"}>
                <img src={logo} className="logo" alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarScroll"
                style={{ width: "100% !important", height: "100% !important" }}
              >
                <div
                  className="d-flex flex-md-row flex-column justify-content-md-end justify-content-center align-items-center"
                  role="search"
                >
                  <ul className="navbar-nav me-md-auto me-0 my-2 my-lg-0 navbar-nav-scroll navbarList">
                    <li className="nav-item hoverItem">
                      <a
                        className="nav-link active homeLink pe-2"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li
                      className="nav-item dropdown hoverItem"
                      style={{
                        position: "relative",
                        height: "100% !important",
                      }}
                    >
                      <a
                        style={{ height: "100% !important" }}
                        className="nav-link servicesLink "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Services
                        {serviceDropDown ? (
                          <KeyboardArrowUpIcon
                            onClick={() => setServiceDropDown(!serviceDropDown)}
                          />
                        ) : (
                          <KeyboardArrowDownIcon
                            onClick={() => setServiceDropDown(!serviceDropDown)}
                          />
                        )}
                      </a>
                    </li>
                    <li className="nav-item dropdown hoverItem">
                      <a
                        className="nav-link vendorsLink"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => setVendorsDropDown(!vendorsDropDown)}
                      >
                        Vendors
                        {vendorsDropDown ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </a>
                    </li>
                    <li className="nav-item dropdown hoverItem">
                      <a
                        className="nav-link aboutLink "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => setAboutDropDown(!aboutDropDown)}
                      >
                        About Company
                        {aboutDropDown ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </a>
                    </li>
                    <li className="nav-item dropdown hoverItem">
                      <a
                        className="nav-link aboutLink "
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() =>
                          setInitiativesDropDown(!initiativesDropDown)
                        }
                      >
                        Initiatives
                        {initiativesDropDown ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </a>
                    </li>
                  </ul>
                  <NavbarButton
                    text="Become a Partner"
                    className="navbarButton"
                  />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* service dropdown */}
      <div
        className="container-fluid"
        style={{ display: serviceDropDown ? "block" : "none" }}
      >
        <div
          className=" serviceDropDownContainer"
          style={{ position: "absolute", top: "100px", zIndex: "1" }}
        >
          <div className="row serviceDropDownRow">
            <div className="col-lg-4 col-12 dropDownRight">
              <div className="row  dropDownRightRow">
                <div className="col-12" style={{ textAlign: "center" }}>
                  <img src={logo} className="dropDownRightLogo" alt="" />
                </div>
                <div className="col-12 ">
                  <h5 className="dropDownRightHeading">
                    The world of Awan Distribution
                  </h5>
                  <p className="dropDownRightPara">
                    Welcome to the world of Awan.
                  </p>
                  <p className="dropDownRightPara">
                    With a people first vision, we pride ourselves for having
                    started Awan as a philanthropy, then evolved to launch our
                    distribution business that sustains the same soul : Humanity
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12 dropDownLeft d-flex  justify-content-start align-items-start">
              <div className="row dropDownLeftRow ">
                <div className="col-lg-5 col-12 ">
                  <h5>
                    <Link
                      to="/professionalservices"
                      style={{
                        color: "var(--primary-color) !important",
                        textDecoration: "none",
                      }}
                    >
                      Professional Services
                      {
                        <KeyboardArrowRightIcon
                          style={{ color: "var(--primary-color)" }}
                        />
                      }
                    </Link>
                  </h5>
                  <p style={{ textAlign: "justify", lineHeight: "24px" }}>
                    Awan Distribution has a team of qualified resources focused
                    on providing comprehensive and complete technology solutions
                    to meet the IT and telecom needs of organizations in
                    Pakistan. Combined with professional services that ....
                  </p>
                </div>
                <div className="offset-1 col-lg-5 col-12">
                  <h5>
                    <Link
                      to={"/trainingfacilities"}
                      style={{
                        color: "var(--primary-color) !important",
                        textDecoration: "none",
                      }}
                    >
                      Training Facilities
                      {
                        <KeyboardArrowRightIcon
                          style={{ color: "var(--primary-color)" }}
                        />
                      }
                    </Link>
                  </h5>

                  <p style={{ textAlign: "justify", lineHeight: "24px" }}>
                    Awan Distribution is an effective and affordable platform
                    that provide vendor-authorized training, executive and skill
                    development training. Our training.....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* vendor dropdown */}
      <div
        className="container-fluid"
        style={{ display: vendorsDropDown ? "block" : "none" }}
      >
        <div
          className=" serviceDropDownContainer"
          style={{ position: "absolute", top: "100px", zIndex: "1" }}
        >
          <div className="row serviceDropDownRow">
            <div className="col-lg-4 col-12  dropDownRight">
              <div className="row  dropDownRightRow">
                <div className="col-12" style={{ textAlign: "center" }}>
                  <img src={logo} className="dropDownRightLogo" alt="" />
                </div>
                <div className="col-12  ">
                  <h5 className="dropDownRightHeading">
                    The world of Awan Distribution
                  </h5>
                  <p className="dropDownRightPara">
                    Welcome to the world of Awan.
                  </p>
                  <p className="dropDownRightPara">
                    With a people first vision, we pride ourselves for having
                    started Awan as a philanthropy, then evolved to launch our
                    distribution business that sustains the same soul : Humanity
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-12">
              <div className="row dropDownLeftRow">
                {vendors?.map((vendor, index) => {
                  return (
                    <div className="col-lg-3 d-flex justify-content-center align-items-center ">
                      <Link to={`vendors/${vendor.location}`}>
                        <img src={vendor.img} width={vendor.width || "120px"} />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about dropdown */}
      <div
        className="container-fluid"
        style={{ display: aboutDropDown ? "block" : "none" }}
      >
        <div
          className=" serviceDropDownContainer"
          style={{ position: "absolute", top: "100px", zIndex: "1" }}
        >
          <div className="row serviceDropDownRow">
            <div className="col-lg-4 col-12  dropDownRight">
              <div className="row  dropDownRightRow">
                <div className="col-12" style={{ textAlign: "center" }}>
                  <img src={logo} className="dropDownRightLogo" alt="" />
                </div>
                <div className="col-12  ">
                  <h5 className="dropDownRightHeading">
                    The world of Awan Distribution
                  </h5>
                  <p className="dropDownRightPara">
                    Welcome to the world of Awan.
                  </p>
                  <p className="dropDownRightPara">
                    With a people first vision, we pride ourselves for having
                    started Awan as a philanthropy, then evolved to launch our
                    distribution business that sustains the same soul : Humanity
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-12 dropDownLeft d-flex  justify-content-start align-items-start pt-4">
              <div className="row dropDownLeftRow ">
                {aboutDropDownText?.map((item, index) => {
                  return (
                    <div className="col-lg-6 col-12 mb-3">
                      <h5 className="dropDownLeftHeading">
                        <Link
                          className="dropDownLeftHeading"
                          to={"/about/" + item.location}
                          style={{
                            color: "var(--primary-color) !important",
                            textDecoration: "none",
                          }}
                        >
                          {item.h5}
                          {
                            <KeyboardArrowRightIcon
                              style={{ color: "var(--primary-color)" }}
                            />
                          }
                        </Link>
                      </h5>
                      <p style={{ textAlign: "left", lineHeight: "20px" }}>
                        {item.p}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Initiatives dropdown */}
      <div
        className="container-fluid"
        style={{ display: initiativesDropDown ? "block" : "none" }}
      >
        <div
          className=" serviceDropDownContainer"
          style={{ position: "absolute", top: "100px", zIndex: "1" }}
        >
          <div className="row serviceDropDownRow">
            <div className="col-lg-4 col-12  dropDownRight">
              <div className="row  dropDownRightRow">
                <div className="col-12" style={{ textAlign: "center" }}>
                  <img src={logo} className="dropDownRightLogo" alt="" />
                </div>
                <div className="col-12  ">
                  <h5 className="dropDownRightHeading">
                    The world of Awan Distribution
                  </h5>
                  <p className="dropDownRightPara">
                    Welcome to the world of Awan.
                  </p>
                  <p className="dropDownRightPara">
                    With a people first vision, we pride ourselves for having
                    started Awan as a philanthropy, then evolved to launch our
                    distribution business that sustains the same soul : Humanity
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-12 dropDownLeft d-flex  justify-content-start align-items-start pt-4">
              <div className="row dropDownLeftRow ">
                {InitiativesDropDownText?.map((item, index) => {
                  return (
                    <div className="col-lg-6 col-12 mb-3">
                      <h5 className="dropDownLeftHeading">
                        <Link
                          className="dropDownLeftHeading"
                          to={"/initiatives/" + item.location}
                          style={{
                            color: "var(--primary-color) !important",
                            textDecoration: "none",
                          }}
                        >
                          {item.h5}
                          {
                            <KeyboardArrowRightIcon
                              style={{ color: "var(--primary-color)" }}
                            />
                          }
                        </Link>
                      </h5>
                      <p style={{ textAlign: "left", lineHeight: "20px" }}>
                        {item.p}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
