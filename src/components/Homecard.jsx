import "../styles/App.css";
import "../firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Homecard() {
  const db = getFirestore();
  const [storedValues, setStoredValues] = useState([]);
  const fetchDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "resource-details"));
    const tmparray = [];
    querySnapshot.forEach((doc) => {
      tmparray.push(doc.data());
    });
    setStoredValues(tmparray);
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

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
                  <button className="card__button">See Demo</button>
                  <button className="card__button secondary">More</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
