import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container-fluid heroSectionContainerFluid">
      <div className="container heroSectionContainer">
        <h2 className="heroSectionHeading">Awan Distribution</h2>
        <p className="heroSectionPara">
          Awan started in 2010, in Egypt and Pakistan as a philanthropic
          undertaking with a team of IT professionals recognizing the value of
          People as the key asset and ultimate objective of any enterprise.
          Extending the same concept to the distribution arena, Awan
          distribution is established by the same team, with a profound
          knowledge and understanding of what makes Distribution an added value
          in deeds & not just words...
        </p>

        <div className=" heroSectionButtons">
          <button className="heroSectionButton1">Read more</button>
          <button className="heroSectionButton2">Contact now</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
