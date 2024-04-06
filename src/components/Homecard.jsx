import "../styles/home-card.css";
import { useEffect, useState } from "react";

export default function Homecard(props) {
  const handleSelect = (id) => {
    const encodedId = btoa(id);
    window.location.href = `/component-page/${encodedId}`;
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          {props.dataValues.map((element, index) => {
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
