import "./Topbar.css";
import callVertor from "../../../public/assets/Topbar/callVertor.png";
import emailVector from "../../../public/assets/Topbar/emailVector.png";
import fbVector from "../../../public/assets/Topbar/fbVector.png";
import inVerctor from "../../../public/assets/Topbar/inVerctor.png";

const Topbar = () => {
  return (
    <div className="container-fluid topbarContainerFluid">
      <div className="container topbarContainer">
        {/* topBarRight */}
        <div className="topBarRight">
          <div className="topbarRightDiv1">
            <img src={callVertor} className="topbarCallVertor" alt="" />
            <span className="topbarRightDiv1Span">+92-21-32786675/80</span>
          </div>
          <div className="topbarRightDiv2">
            <img src={emailVector} className="topbarCallVertor" alt="" />
            <span className="topbarRightDiv2Span">
              info@awandistribution.com
            </span>
          </div>
        </div>
        {/* topBarLeft */}
        <div className="topBarLeft">
          <div className="topbarLeftImgDiv">
            <img src={fbVector} className="topBarLeftImg" alt="" />
          </div>
          <div className="topbarLeftImgDiv">
            <img src={inVerctor} className="topBarLeftImg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
