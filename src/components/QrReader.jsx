import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import "../styles/QrStyles.css";
import QrScanner from "qr-scanner";
import QrFrame from "../assets/images/qr-frame.svg";
import { useNavigate } from "react-router-dom";

const QrReader = () => {
  const scanner = useRef(null);
  const videoEl = useRef(null);
  const qrBoxEl = useRef(null);
  const [qrOn, setQrOn] = useState(true);
  const navigate = useNavigate();

  const [scannedResult, setScannedResult] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onScanSuccess = (result) => {
    console.log(result);
    const grNumber = result?.data.split("~")[0];
    setShowModal(true);
    setScannedResult(grNumber);
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
        localStorage.setItem("currentUser", data.currentUser.gr_no);
        localStorage.setItem("isLoggedIn", data.success);
        toast.success(" LoggedIn Successfully ", {
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
        navigate("/home");
      } else {
        toast.error(" Invalid QR code ", {
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
      }
    } catch (error) {
      console.log(error);
      alert("Login failed. Please try again.");
    } finally {
      setPassword("");
    }
  };

  useEffect(() => {
    if (!qrOn) {
      alert(
        "Camera is blocked or not accessible. Please allow camera in your browser permissions and Reload."
      );
    }
  }, [qrOn]);

  return (
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
            <button onClick={handleLogin} style={{ backgroundColor: '#14a2b9' }}>Login</button>

          </div>
        </div>
      )}
    </>
  );
};

export default QrReader;
