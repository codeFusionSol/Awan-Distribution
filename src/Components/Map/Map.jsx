import "./Map.css";
import mapImage from "../../../public/assets/Map/map.svg";

// flags
import flag1 from "../../../public/assets/Map/flags/pak.svg";
import flag2 from "../../../public/assets/Map/flags/afghan.svg";
import flag3 from "../../../public/assets/Map/flags/uae.svg";
import flag4 from "../../../public/assets/Map/flags/singapore.svg";

// design line
import designIine from "../../../public/assets/Map/designingLine.png";

const Map = () => {
  const flagsImages = [flag1, flag2, flag3, flag4];
  const flagsNames = [
    "PAKISTAN",
    "AFGHANISTAN",
    "UNITED ARAB EMIRATES",
    "SINGAPORE",
  ];

  const flagImagesAndNames = [
    {
      flag: flag1,
      name: "PAKISTAN",
    },
    {
      flag: flag2,
      name: "AFGHANISTAN",
    },
    {
      flag: flag3,
      name: "UNITED ARAB EMIRATES",
    },
    {
      flag: flag4,
      name: "SINGAPORE",
    },
  ];

  return (
    <div className="container-fluid mapContainerFluid">
      <div className="container">
        <br />
        <br />
        <br />

        <div className="row ">
          <h3 className="text-center" style={{lineHeight:"40px"}}>
            <span style={{ borderBottom: "3px solid var(--border-color)" }}>
              Geogra
            </span>
            <span style={{ border: "none !important" }}>phical Coverage </span>
          </h3>
        </div>
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-12">
            <img src={mapImage} width="100%" alt="" />
          </div>
        </div>

        <div className="row mapFlags">
          {flagsImages.map((flag, index) => (
            <div
              className="col-md-3 col-6 d-flex justify-content-center "
              key={index}
            >
              <img src={flag} width="100px" alt="" />
            </div>
          ))}
        </div>

        <div className="row mt-2 mapDesignLine">
          <div className="col-12 d-flex justify-content-center">
            <img src={designIine} width={"82%"} alt="" />
          </div>
        </div>

        <div className="row mapFlagNames">
          {flagsNames.map((flag, index) => (
            <div className="col-md-3 col-6 text-center " key={index}>
              <span className="text-center">{flag}</span>
            </div>
          ))}
        </div>

        <div
          className="row mapFlagsAndNames d-flex justify-content-center align-items-center ms-1"
        >
          {flagImagesAndNames.map((flag, index) => (
            <>
              <div
                className=" col-md-3 col-6 d-flex flex-column justify-content-center align-items-center "
                key={index}
              >
                <img
                  src={flag?.flag}
                  width="100px"
                  className="d-flex justify-content-center align-items-center"
                  alt=""
                />
                <span className="text-center" style={{ fontSize: "12px" }}>
                  {flag?.name}
                </span>
              </div>
            </>
          ))}
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Map;
