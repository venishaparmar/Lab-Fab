import "../styles/componentPage.css";
import NavBar from "./NavBar";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore"; // Import Firestore methods

const ComponentPage = () => {
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  function getEncodedIdFromUrl() {
    const urlParts = window.location.href.split("/");
    return urlParts[urlParts.length - 1];
  }
  function decodeId(encodedId) {
    return atob(encodedId);
  }
  const encodedId = getEncodedIdFromUrl();

  const ids = decodeId(encodedId);
  const [cardDetails, setCardDetails] = useState(null); // State to store card details
  const db = getFirestore(); // Initialize Firestore

  useEffect(() => {
    // Function to fetch card details from Firestore
    const fetchCardDetails = async () => {
      try {
        const docRef = doc(db, "resource-details", ids); // Reference to the document with the provided ID
        const docSnap = await getDoc(docRef); // Get the document snapshot
        if (docSnap.exists()) {
          setCardDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching card details:", error);
      }
    };

    fetchCardDetails(); // Call the fetchCardDetails function
  }, [db, id]);

  if (!cardDetails) {
    return <Loader />;
  }

  // Render the card details once fetched
  return (
    <>
      <NavBar />
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">{cardDetails.name}</h3>
                <p>{cardDetails.description}</p>
                <div className="mt-3">
                  <span className="field dark-color"> Location : </span>
                  <span className="value">{cardDetails.location}</span>
                </div>
                <div className="mt-3">
                  <span className="field dark-color"> Timing : </span>
                  <span className="value">{cardDetails.timing}</span>
                </div>
              </div>
              <a
                href={cardDetails["video-link"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="btn btn-info">
                  Watch Video
                </button>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
                <img
                  src={"src/" + cardDetails.imagePath}
                  title="avatar"
                  alt="avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComponentPage;
