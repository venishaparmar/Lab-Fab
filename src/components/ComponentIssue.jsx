import { useState } from "react";
// import "../styles/componentissue.css";
import "../styles/lab-entry.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ComponentIssue = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <div className="wrapper">
      <div className="title">Component Issue Details</div>
        <div className="form">
          <div className="inputfield">
            <label>Student Name</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <label>Component Name</label>
            <input type="text" className="input" />
          </div>
          <div className="date-picker-container">
            <label>Issue Date :</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              isClearable
            />
            <label>Return Date :</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              isClearable
            />
          </div>
          <div className="inputfield">
            <label>Purpose</label>
            <input type="text" className="input" />
          </div>
          <div className="inputfield">
            <input type="submit" defaultValue="Register" className="btn" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentIssue;
