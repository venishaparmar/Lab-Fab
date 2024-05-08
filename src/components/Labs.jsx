import { useState } from "react";
import "../styles/LabCard.css";


export default function Labs() {
  const [showModal, setShowModal] = useState(false);
  const [lab, setLab] = useState({ code: "", name: "" });

  const handleCardClick = (code, name) => {
    setShowModal(true);
    setLab({ code, name });
  };
  return (
    <>
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
          {/* Add more card items */}
        </div>
      </div>
      {showModal && (
        <div className="lab-entry-modal">
          <div className="lab-entry-modal-content">
            <h2 style={{ marginBottom: '8px' }}>{lab.name} - Lab Details</h2>
            <div className="lab-details">
              <p style={{ marginBottom: '8px' }}><strong>Lab Code:</strong> {lab.code}</p>
              <p style={{ marginBottom: '8px' }}><strong>Lab Capacity:</strong> 30</p>
              <p style={{ marginBottom: '8px' }}><strong>Currently Available Students:</strong> 25</p>
            </div>
            <button
              onClick={() => setShowModal(false)}
              style={{ marginTop: '16px', cursor: 'pointer', fontSize: '16px', padding: '8px 16px' }}
            >
              Close
            </button>
          </div>
        </div>


      )}
    </>
  );
}
