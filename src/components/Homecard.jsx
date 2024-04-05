import "../styles/home-card.css";
import "../firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Homecard() {
  const db = getFirestore();
  const [storedValues, setStoredValues] = useState([]);

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "resource-details"));
      const tmparray = [];
      querySnapshot.forEach((doc) => {
        // Include the ID along with other document data
        tmparray.push({ id: doc.id, ...doc.data() });
      });
      setStoredValues(tmparray);
      console.log(tmparray[0]);
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  const handleSelect = (id) => {
    const encodedId = btoa(id);
    window.location.href = `/component-page/${encodedId}`;
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {storedValues.map((element, index) => {
            let newImagePath = "src/" + element.imagePath;
            return (
              <div key={index} className="card col-lg-3 mt-3 mr-6">
                <img src={newImagePath} alt="hello" />
                <div className="card__content">
                  <p className="card__title">{element.name}</p>
                  <p className="card__description">{element.description}</p>
                  <div className="card__buttons">
                    <button className="card__button">See Demo</button>
                    <button
                      className="card__button secondary"
                      onClick={() => handleSelect(element.id)}
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
