import "./RecognitionCard.css";

const RecognitionCard = ({ data }) => {
  return (
    <div
      className="card recognitionCard"
      style={{ width: "100%", height: "450px" }}
    >
      <div className="card-body">
        <h5 className="card-title text-center w-100 ">
          <img
            src={data.img}
            className=" recognitionCardImg"
            width="150px"
            alt=""
          />
        </h5>
        <h6
          className="mt-3 mb-3 text-center w-100 recognitionCardH6 "
          style={{ fontWeight: "bold", fontSize: "20px" }}
        >
          {data.heading}
        </h6>
        <p className="text-center recognitionCardP">{data.p}</p>
      </div>
    </div>
  );
};

export default RecognitionCard;
