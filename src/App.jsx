import "../src/styles/App.css";
// import Labcard from "./components/Labcard";
// import NavBar from "./components/NavBar";
// import HomeMain from "./components/HomeMain";
import LabEntry from "./components/LabEntry";

function App() {
  return (
    <>
    {/* <Labcard/> */}
      {/* <NavBar />
      <HomeMain /> */}
      <LabEntry />

      {/* <NavBar /> */}
      {/* <HomeMain /> */}
      {/* <div class="container">
        <div class="row">
          <div class="card col-lg-3 mt-3 mr-6">
            <img
              src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ"
              alt="hello"
            />
            <div class="card__content">
              <p class="card__title">Project Name</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>
          <div class="card col-lg-3 mt-3 mr-6">
            <img
              src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ"
              alt="hello"
            />
            <div class="card__content">
              <p class="card__title">Project Name</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>
          <div class="card col-lg-3 mt-3 mr-6">
            <img
              src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ"
              alt="hello"
            />
            <div class="card__content">
              <p class="card__title">Project Name</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>
          <div class="card col-lg-3 mt-3 mr-6">
            <img
              src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ"
              alt="hello"
            />
            <div class="card__content">
              <p class="card__title">Project Name</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>
          <div class="card col-lg-3 mt-3 mr-6">
            <img
              src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ"
              alt="hello"
            />
            <div class="card__content">
              <p class="card__title">Project Name</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>
          <div class="card col-lg-3 mt-3 mr-6">
            <img
              src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ"
              alt="hello"
            />
            <div class="card__content">
              <p class="card__title">Project Name</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>
          <div class="card col-lg-3 mt-3 mr-6">
            <img
              src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ"
              alt="hello"
            />
            <div class="card__content">
              <p class="card__title">Project Name</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>
          <div class="card col-lg-3 mt-3 mr-6">
            <img
              src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ"
              alt="hello"
            />
            <div class="card__content">
              <p class="card__title">Project Name</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>
          <div class="card col-lg-3 mt-3 mr-6">
            <img
              src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ"
              alt="hello"
            />
            <div class="card__content">
              <p class="card__title">Project Name</p>
              <p class="card__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco....
              </p>
              <button class="card__button">Live Demo</button>
              <button class="card__button secondary">Source Code</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* <HomeMain /> */}
      {/* <div className="container">
  <div className="row">
    <div className="card col-lg-3 mt-3 mr-6">
      <img src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="hello" />
      <div className="card__content">
        <p className="card__title">Project Name</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <button className="card__button">Live Demo</button>
        <button className="card__button secondary">Source Code</button>
      </div>
    </div>
    <div className="card col-lg-3 mt-3 mr-6">
      <img src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="hello" />
      <div className="card__content">
        <p className="card__title">Project Name</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <button className="card__button">Live Demo</button>
        <button className="card__button secondary">Source Code</button>
      </div>
    </div>
    <div className="card col-lg-3 mt-3 mr-6">
      <img src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="hello" />
      <div className="card__content">
        <p className="card__title">Project Name</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <button className="card__button">Live Demo</button>
        <button className="card__button secondary">Source Code</button>
      </div>
    </div>
    <div className="card col-lg-3 mt-3 mr-6">
      <img src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="hello" />
      <div className="card__content">
        <p className="card__title">Project Name</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <button className="card__button">Live Demo</button>
        <button className="card__button secondary">Source Code</button>
      </div>
    </div>
    <div className="card col-lg-3 mt-3 mr-6">
      <img src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="hello" />
      <div className="card__content">
        <p className="card__title">Project Name</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <button className="card__button">Live Demo</button>
        <button className="card__button secondary">Source Code</button>
      </div>
    </div>
    <div className="card col-lg-3 mt-3 mr-6">
      <img src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="hello" />
      <div className="card__content">
        <p className="card__title">Project Name</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <button className="card__button">Live Demo</button>
        <button className="card__button secondary">Source Code</button>
      </div>
    </div>
    <div className="card col-lg-3 mt-3 mr-6">
      <img src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="hello" />
      <div className="card__content">
        <p className="card__title">Project Name</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <button className="card__button">Live Demo</button>
        <button className="card__button secondary">Source Code</button>
      </div>
    </div>
    <div className="card col-lg-3 mt-3 mr-6">
      <img src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="hello" />
      <div className="card__content">
        <p className="card__title">Project Name</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
        <button className="card__button">Live Demo</button>
        <button className="card__button secondary">Source Code</button>
      </div>
    </div>
    <div className="card col-lg-3 mt-3 mr-6">
      <img src="https://imgs.search.brave.com/1mBj-BB6QbpQ-iE8fjtTosHivzamuu1_ZKnhVro41dc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mzg5OTEzODMxNDIt/MzZjNGVkZWFmZmRl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFpu/SmxaWHhsYm53d2ZI/d3dmSHg4TUE9PQ" alt="hello" />
      <div className="card__content">
        <p className="card__title">Project Name</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco....
        </p>
        <button className="card__button">Live Demo</button>
        <button className="card__button secondary">Source Code</button>
      </div>
    </div>
  </div>
</div> */}
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
