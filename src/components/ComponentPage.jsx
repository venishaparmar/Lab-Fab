import "../styles/componentPage.css"
import "../styles/App.css";
import "../firebaseConfig";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";


const ComponentPage = () => {
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
        <div className="container">
            <img src="url_to_your_image" alt="Component" />
            <h1>Title</h1>
            <p>Description</p>
            <p>Component Lab Location: XYZ</p>
            <p>Timing for Issuing Component: HH:MM - HH:MM</p>
            <p>Faculty Incharge: Name</p>
        </div>
    )
}

export default ComponentPage
