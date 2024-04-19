import { useEffect, useRef, useState } from "react";

<<<<<<< HEAD
import "../styles/QrStyles.css";
import QrScanner from "qr-scanner";
import QrFrame from "../assets/images/qr-frame.svg";
import { useNavigate } from "react-router-dom";

const QrReader = () => {
=======
// Styles
import "../styles/QrStyles.css";

// Qr Scanner
import QrScanner from "qr-scanner";
import QrFrame from "../assets/images/qr-frame.svg";

const QrReader = () => {
  // QR States
>>>>>>> fe7155bdf6bc0ad96f8374271da07df49a574bc7
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
<<<<<<< HEAD
  const navigate = useNavigate();

  const [scannedResult, setScannedResult] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onScanSuccess = (result) => {
    console.log(result);
    const grNumber = result?.data.split("~")[0];
    setShowModal(true);
    setScannedResult(grNumber);
=======

  // Result
  const [scannedResult, setScannedResult] = useState("");

  // Success
  const onScanSuccess = (result) => {
    console.log(result);
    setScannedResult(result?.data);
>>>>>>> fe7155bdf6bc0ad96f8374271da07df49a574bc7
  };

  // Fail
  const onScanFail = (err) => {
    console.log(err);
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

<<<<<<< HEAD
  const handleLogin = async () => {
    if (!password) {
      alert("Please enter your password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ grNumber: scannedResult, password: password }),
      });

      const data = await response.json();
      console.log(data.error);

      if (data.success) {
        localStorage.setItem("currentUser", data.currentUser);
        localStorage.setItem("isLoggedIn", data.success);
        navigate("/home");
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("Login failed. Please try again.");
    } finally {
      setShow(false);
      setPassword("");
      refClose.current.click();
    }
  };

=======
>>>>>>> fe7155bdf6bc0ad96f8374271da07df49a574bc7
  useEffect(() => {
    if (!qrOn) {
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
    }
  }, [qrOn]);

  return (
<<<<<<< HEAD
    <>
      {!showModal && (
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
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}
    </>
=======
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
>>>>>>> fe7155bdf6bc0ad96f8374271da07df49a574bc7
  );
};

export default QrReader;
