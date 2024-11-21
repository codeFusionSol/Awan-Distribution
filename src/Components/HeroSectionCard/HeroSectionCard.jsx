import "./HeroSectionCard.css";

const HeroSectionCard = ({ heading, span }) => {
  return (
    <div className="HeroSectionCardContainer">
      <h1 className="heroSectionCardHeading">{heading}</h1>
      <span className="heroSectionCardSpan">{span}</span>
    </div>
  );
};

export default HeroSectionCard;
