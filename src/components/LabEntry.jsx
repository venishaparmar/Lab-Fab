import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import "../styles/QrStyles.css";
import QrScanner from "qr-scanner";
import QrFrame from "../assets/images/qr-frame.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LabEntry = () => {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const navigate = useNavigate();

  const [scannedResult, setScannedResult] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [flag, setFlag] = useState("");

  const handlePurposeChange = (e) => {
    setPurpose(e.target.value);
  };

  const onScanSuccess = async (result) => {
    console.log(result);
    let decideFlag = true;
    const grNumber = result?.data.split("~")[0];
    setScannedResult(grNumber);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/lab-entries/check",
        { grNumber }
      );
      decideFlag = response.data.exists;
    } catch (error) {
      console.error(error);
    }
    if (decideFlag) {
      setShowModal(false);
      setShowLeaveModal(true);
    } else {
      setShowModal(true);
      setShowLeaveModal(false);
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setShowLeaveModal(false);
  };

  const onScanFail = (err) => {
    console.log(err);
  };

  const handleLeaveLab = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/lab-entries//lab-leave",
        {
          grNumber: scannedResult,
        }
      );
      toast.success(" Successfully removed entry ", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      setShowModal(false);
      setShowLeaveModal(false);
    } catch (error) {
      setErrorMessage(error.message || "Error updating LabEntry");
    }
  };

  useEffect(() => {
    if (videoEl.current && !scanner.current) {
      scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrBoxEl.current || undefined,
      });

      scanner.current
        .start()
        .then(() => setQrOn(true))
        .catch((err) => {
          if (err) setQrOn(false);
        });
    }

    return () => {
      if (!videoEl.current) {
        scanner.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (!qrOn) {
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
    }
  }, [qrOn]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/lab-entries/add-entry",
        {
          grNumber: scannedResult,
          entryTime: new Date().toISOString(),
          leaveTime: new Date().toISOString(),
          purpose: purpose,
          isActive: true,
          labCode: "MA115",
        }
      );

      toast.success(" Lab Entry Added ", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });

      // Reset states after successful submission
      setShowModal(false);
      setShowLeaveModal(false);
      setPurpose(""); // Clear the purpose state
      setScannedResult(""); // Clear the scanned result
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="lab-entry-heading"> Scan ID Card To Lab Entry </h1>
      <div className="qr-reader">
        <video ref={videoEl}></video>
        <div ref={qrBoxEl} className="qr-box">
          <img
            src={QrFrame}
            alt="Qr Frame"
            width={256}
            height={256}
            className="qr-frame"
          />
        </div>

        {scannedResult && (
          <p
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 99999,
              color: "white",
            }}
          >
            Scanned Result: {scannedResult}
          </p>
        )}
      </div>

      {showLeaveModal && (
        <div className="leave-entry-modal">
          <div className="leave-entry-modal-content">
            <h2>Leave Entry</h2>
            <div className="leave-entry-message">
              <p>Are you sure you want to leave the lab?</p>
              <div className="button-container">
                <button className="leave-button" onClick={handleLeaveLab}>
                  Leave
                </button>
                <button className="close-button" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="lab-entry-modal">
          <div className="lab-entry-modal-content">
            <h2>Enter Purpose</h2>
            <div className="lab-entry-form-group">
              <label className="purpose-label" htmlFor="purpose">
                Purpose:
              </label>
              <select
                id="purpose"
                value={purpose}
                onChange={handlePurposeChange}
              >
                <option value="">Select Purpose</option>
                <option value="project work">Project Work</option>
                <option value="exam reading">Exam Reading</option>
                <option value="assignment">Assignment</option>
                <option value="other work">Other Work</option>
              </select>
            </div>
            <button className="lab-entry-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LabEntry;
