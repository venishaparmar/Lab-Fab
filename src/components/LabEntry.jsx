import "../styles/lab-entry.css";

export default function LabEntry({ location, name }) {
  return (
    <div>
      <div className="lab-info">
        <label> Lab Location : {location} </label>
        <label> Lab Name : {name} </label>
        <label> Total Students : 12 </label>
      </div>
      <div className="wrapper">
        <div className="title">Lab Entry of MA115</div>

        <div className="title">Lab Entry of {location}</div>

        <div className="title">Lab Entry of {location}</div>

        <div className="title">
          Lab Entry of {location}
        </div>

        <div className="form">
          <div className="inputfield">
            <label>Name</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Enrollment</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Semester</label>
            <div className="custom_select">
              <select>
                <option value>Select</option>
                <option value>Semester 2</option>
                <option value>Semester 4</option>
                <option value>Semester 6</option>
                <option value>Semester 8</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <label>Work Purpose</label>
            <div className="custom_select">
              <select>
                <option value>Select</option>
                <option value>Project Work</option>
                <option value>Exam Reading</option>
                <option value>Assignment</option>
                <option value>Other Work</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <input type="submit" defaultValue="Register" className="btn" />
          </div>
        </div>
      </div>
    </div>
  );
}
