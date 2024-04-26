import { useState } from "react";
import "../styles/LabCard.css";
import LabEntry from "./LabEntry";
import AdminNavbar from "./Faculty/AdminNavbar";

export default function Labs() {
  const [showForm, setShowForm] = useState(false);
  const [selectedLab, setSelectedLab] = useState({ location: "", name: "" });

  const handleCardClick = (location, name) => {
    setSelectedLab({ location, name });
    setShowForm(true);
  };

  return (
    <>
    <AdminNavbar/>
    <div>
      <div className="card-list">
        <a
          href="#"
          className="card-item"
          onClick={() => handleCardClick("MA115", "Web Development Lab")}
        >
          <h2>MA115</h2>
          <h3>Web Development Lab</h3>
        </a>
        <a
          href="#"
          className="card-item"
          onClick={() => handleCardClick("MA113", "Designer Lab")}
        >
          <h2>MA113</h2>
          <h3>Designer Lab</h3>
        </a>
        <a
          href="#"
          className="card-item"
          onClick={() => handleCardClick("MA112", "Data Science Lab")}
        >
          <h2>MA112</h2>
          <h3>Data Science Lab</h3>
        </a>
        <a
          href="#"
          className="card-item"
          onClick={() => handleCardClick("MA109", "Electronics Lab")}
        >
          <h2>MA109</h2>
          <h3>Electronics Lab</h3>
        </a>
        <a
          href="#"
          className="card-item"
          onClick={() => handleCardClick("MA108", "Communication Lab")}
        >
          <h2>MA108</h2>
          <h3>Communication Lab</h3>
        </a>
        <a
          href="#"
          className="card-item"
          onClick={() => handleCardClick("MA107", "Robotics Lab")}
        >
          <h2>MA107</h2>
          <h3>Robotics Lab</h3>
        </a>
      </div>
      {showForm && (
        <LabEntry location={selectedLab.location} name={selectedLab.name} />
      )}
    </div>
    </>
  );
}
