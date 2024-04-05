import { useState } from "react";
import "../styles/componentissue.css";
import InputField from "./InputField";
import DropDown from "./DropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NavBar from "./NavBar";
const ComponentIssue = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <NavBar />
      <div className="form-div">
        <form className="comp-form">
          <InputField labelName="Name :" id="name " />
          <div className="inputfield">
            <label>Division</label>
            <div className="custom_select">
              <select>
                <option value>Select</option>
                <option value>TK1</option>
                <option value>TK1</option>
                <option value>TK1</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <label>Batch</label>
            <div className="custom_select">
              <select>
                <option value>select</option>
                <option value>A</option>
                <option value>B</option>
                <option value>C</option>
              </select>
            </div>
          </div>
          <div className="inputfield">
            <label>Semester</label>
            <div className="custom_select">
              <select>
                <option value>select</option>
                <option value>2</option>
                <option value>4</option>
                <option value>6</option>
              </select>
            </div>
          </div>
          <InputField labelName="Component Name :" id="comp-name" />
          <div className="date-picker-container">
            <h2>Return Date :</h2>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              isClearable
            />
          </div>
          <InputField labelName="Purpose :" id="purpose" />
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ComponentIssue;
