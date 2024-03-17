import { useState } from "react";
import "../styles/componentissue.css";
import InputField from "./InputField";
import DropDown from "./DropDown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ComponentIssue = () => {
  const batchItems = ["Batch A", "Batch B", "Batch C", "Batch D"];
  const divisionItems = ["TK1", "TK2", "TK3", "TK4"];
  const semesterItems = [
    "1 (First)",
    "2 (Second)",
    "3 (Third)",
    "4 (Fourth)",
    "5 (Fifth)",
  ];
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <div className="form-div">
        <form className="comp-form">
          <InputField labelName="Name :" id="name " />
          <div className="dropdown-menus">
            <DropDown label="Division" items={divisionItems} />
            <DropDown label="Batch" items={batchItems} />
            <DropDown label="Semester" items={semesterItems} />
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