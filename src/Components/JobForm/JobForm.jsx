import "./jobForm.css";
const JobForm = () => {
  return (
    <div className="jobFormContainer">
      <div className="right">
        <form action="">
          <div className="inputContainer">
            <input type="text" placeholder="First Name" />
            <input type="email" placeholder="Last Name" />
            <input type="text" placeholder="Country" />
            <input type="text" placeholder="City" />
            <input
              type="text"
              placeholder="Residential Address"
              className="speacailInput1"
            />
            <input
              type="text"
              placeholder="Post / Zip Code"
              className="speacailInput2"
            />
            <input
              type="text"
              placeholder="Chose Description Position"
              className="speacailInput3"
            />
            <input type="file" placeholder="Upload Your Resume" />
            <button className="sendBtn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
