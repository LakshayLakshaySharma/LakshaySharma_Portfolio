import React from "react";

function Projects() {
  return (
    <div className="container">
      <div className="container row">
        <h1>Work Sample</h1>
        {/* react info project */}
        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://i.pinimg.com/564x/61/e3/d5/61e3d5ce3923b1a74eab3434df097990.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">React-Info Page</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://lakshaylakshaysharma.github.io/React-Info/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        {/* bmi calculator project */}
        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://i.pinimg.com/236x/b2/14/ad/b214ad226f2608d3665670fb890f4889.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">BMI Calculator</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://lakshaylakshaysharma.github.io/BMI---REACT/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        {/* photo search project */}
        <div className="col-md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img
              src="https://i.pinimg.com/564x/dd/5f/68/dd5f6816e60b4c9094f03a8518c26f40.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Search Photo App</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://lakshaylakshaysharma.github.io/PhotoMania/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-primary"
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>

        {/* news app */}
        <div>
          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://i.pinimg.com/564x/f7/47/2e/f7472e601d4f32131d0a3fae5e5c3cc3.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">News App</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://lakshaylakshaysharma.github.io/Newsify-REACT/"
                  target="_blank"
                  rel="noreferrer"
                  class="btn btn-primary"
                >
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* more work sample */}
      <div>

      </div>
    </div>
  );
}

export default Projects;
