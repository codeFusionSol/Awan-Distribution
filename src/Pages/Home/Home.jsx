import CardSlider from "../../Components/CardSlider/CardSlider.jsx";
import CarusolSlider from "../../Components/CarusolSlider/CarusolSlider.jsx";
import CoreValues from "../../Components/CoreValues/CoreValues.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import HeroSectionCard from "../../Components/HeroSectionCard/HeroSectionCard.jsx";
import Map from "../../Components/Map/Map.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Recognition from "../../Components/Recognition/Recognition.jsx";
import Topbar from "../../Components/Topbar/Topbar.jsx";
import "./Home.css";

const Home = () => {
  const cardsData = [
    {
      heading: "40",
      span: "Enterprise Partners",
    },
    {
      heading: "65",
      span: "Commercial Partners",
    },
    {
      heading: "153",
      span: "SMB Partners",
    },
  ];
  return (
    <>
      <Topbar />
      <Navbar />

      <HeroSection />
      <div className="container d-sm-flex d-none justify-content-between align-items-center ">
        {cardsData.map((data, index) => (
          <HeroSectionCard
            heading={data.heading}
            span={data.span}
            key={index}
          />
        ))}
      </div>
      <div className="productsPortfolioContainer">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <h3 className="text-center ">
            <span style={{ borderBottom: "3px solid var(--border-color)" }}>
              Produ
            </span>
            <span style={{ border: "none !important" }}>cts </span>
            Portfolio
          </h3>
        </div>
        <br />
        <br />
        <CardSlider />
      </div>

      <br />
      <br />

      <div className="container">
        <h3 className="text-center ">
          <span style={{ borderBottom: "3px solid var(--border-color)" }}>
            Our C
          </span>
          <span style={{ border: "none !important" }}>ore Values </span>
        </h3>
      </div>
      <br />
      <br />

      <CoreValues />
      <br />
      <br />
      <br />
      <CarusolSlider />
      <Map />
      <br />
      <br />
      <br />
      <Recognition />

      <br />
      <Footer />
    </>
  );
};

export default Home;
