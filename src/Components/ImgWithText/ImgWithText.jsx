import "./ImgWithText.css";

const ImgWithText = ({ heading, p1, p2, p3, img, president, ceo }) => {
  return (
    <div class="container" style={{ marginTop: "100px" }}>
      <div className="row">
        <div className="col-lg-5 col-12">
          {heading && (
            <h2 className="ProfessionalServicesTextImgHeading">{heading}</h2>
          )}
          {p1 && <p className="ProfessionalServicesTextImgPara">{p1}</p>}
          {p2 && <p className="ProfessionalServicesTextImgPara">{p2}</p>}
          {p3 && <p className="ProfessionalServicesTextImgPara">{p3}</p>}
          {president && ceo && (
            <>
              <h4 className="h4">
                President: <span className="h4Span">{president}</span>
              </h4>
              <h4 className="h4">
                CEO: <span className="h4Span">{ceo}</span>
              </h4>
            </>
          )}
        </div>
        <div className="col-lg-7 col-12 mt-5 mt-lg-0">
          <img src={img} width={"100%"} height={"100%"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImgWithText;
