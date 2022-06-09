import React from "react";

function Projects() {
  return (
    <div className="container">
      <div className=" row">
        <h1
          style={{
            fontSize: "50px",
            fontFamily: "arial",
            marginBottom: "20px",
          }}
        >
          WORK SAMPLE
        </h1>
        <h1
          style={{
            fontSze: "30px",
            fontFamily: "arial",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          React Project Sample{" "}
        </h1>
        {/* react info project */}

        <div className="col-md-4">
          <div className="card " style={{ width: "300px", boxShadow:'2px 2px 2px 2px gray'}}>
            <img
              src="https://i.pinimg.com/564x/61/e3/d5/61e3d5ce3923b1a74eab3434df097990.jpg"
              className="card-img-top"
              alt=""
              style={{ height: "220px", width: "300px" }}
            />
            <div className="card-body">
              <h5 className="card-title">React-Info Page</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-around">
                <a
                  href="https://lakshaylakshaysharma.github.io/React-Info/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Project
                </a>
                <a
                  href="https://github.com/LakshayLakshaySharma/React-Info"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* bmi calculator project */}
        <div className="col-md-4">
          <div className="card" style={{ width: "300px" , boxShadow:'2px 2px 2px 2px gray'}}>
            <img
              src="https://i.pinimg.com/236x/b2/14/ad/b214ad226f2608d3665670fb890f4889.jpg"
              className="card-img-top"
              alt=""
              style={{ height: "220px", width: "300px" }}
            />
            <div className="card-body">
              <h5 className="card-title">BMI Calculator</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-around">
                <a
                  href="https://lakshaylakshaysharma.github.io/BMI---REACT/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Project
                </a>
                <a
                  href="https://github.com/LakshayLakshaySharma/BMI---REACT"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* photo search project */}
        <div className="col-md-4">
          <div className="card" style={{ width: "300px", boxShadow:'2px 2px 2px 2px gray' }}>
            <img
              src="https://i.pinimg.com/564x/dd/5f/68/dd5f6816e60b4c9094f03a8518c26f40.jpg"
              className="card-img-top"
              alt=""
              style={{ height: "220px", width: "300px" }}
            />
            <div className="card-body">
              <h5 className="card-title">Search Photo App</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex justify-content-around">
                <a
                  href="https://lakshaylakshaysharma.github.io/PhotoMania/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Project
                </a>

                <a
                  href="https://github.com/LakshayLakshaySharma/PhotoMania"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* news app */}
        <div>
          <div className="col-md-4">
            <div className="card" style={{ width: "300px", marginTop: "25px", boxShadow:'2px 2px 2px 2px gray' }}>
              <img
                src="https://i.pinimg.com/564x/f7/47/2e/f7472e601d4f32131d0a3fae5e5c3cc3.jpg"
                className="card-img-top"
                alt=""
                style={{ height: "220px", width: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">News App</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://lakshaylakshaysharma.github.io/Newsify-REACT/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Project
                  </a>

                  <a
                    href="https://github.com/LakshayLakshaySharma/Newsify-REACT"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* more work sample, javascript project */}
      <div>
        <h1
          style={{
            fontSze: "30px",
            fontFamily: "arial",
            textAlign: "center",
            marginBottom: "40px",
            marginTop: "20px",
          }}
        >
          Javascript Work Sample
        </h1>
        <div>
          <div className="row">
            <div className="col-md-4">
              {/* tip calcualtor */}
              <div className="card" style={{ width: "300px", boxShadow:'2px 2px 2px 2px gray' }}>
                <img
                  src="https://i.pinimg.com/564x/cc/d7/be/ccd7be64792bd1238be0d5efad47631b.jpg"
                  className="card-img-top"
                  alt=""
                  style={{ height: "220px", width: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Tip Calculator</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <div className="d-flex justify-content-around">
                    <a
                      href="https://cdpn.io/pen/debug/NWgqbaY?authentication_hash=VGrWNooQgYjM"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Project
                    </a>

                    <a
                      href="https://codepen.io/lakshaysharma/pen/NWgqbaY"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {/* calcualtor */}
              <div className="card" style={{ width: "300px", boxShadow:'2px 2px 2px 2px gray' }}>
                <img
                  src="https://i.pinimg.com/736x/6e/75/90/6e7590fd49ac3c2198961a128d128b20.jpg"
                  className="card-img-top"
                  alt=""
                  style={{ height: "220px", width: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title"> Calculator</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-around">
                    <a
                      href="https://cdpn.io/pen/debug/wvdREjg?authentication_hash=VGAWNooQaGdr"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Project
                    </a>

                    <a
                      href="https://codepen.io/lakshaysharma/pen/wvdREjg"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {/* hex color changer */}
              <div className="card" style={{ width: "300px", boxShadow:'2px 2px 2px 2px gray' }}>
                <img
                  src="https://i.pinimg.com/564x/b1/0e/fb/b10efbb46769f49271592e3b682e4948.jpg"
                  className="card-img-top"
                  alt=""
                  style={{ height: "220px", width: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Hex Color Changer</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-around">
                    <a
                      href="https://cdpn.io/pen/debug/abWMPrj?authentication_hash=LQMExNNVdWzk"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Project
                    </a>

                    <a
                      href="https://codepen.io/lakshaysharma/pen/abWMPrj"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {/* todo list */}
              <div
                className="card"
                style={{ width: "300px", marginTop: "25px", boxShadow:'2px 2px 2px 2px gray' }}
              >
                <img
                  src="https://i.pinimg.com/564x/81/cb/be/81cbbee1fecc4ab241d7b3c8a3270aaa.jpg"
                  className="card-img-top"
                  alt=""
                  style={{ height: "220px", width: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">To-Do List</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-around">
                    <a
                      href="https://cdpn.io/pen/debug/yLbvbaq?authentication_hash=vWkRwooWDxKM"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Project
                    </a>

                    <a
                      href="https://codepen.io/lakshaysharma/pen/yLbvbaq"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {/* css change */}
              <div
                className="card"
                style={{ width: "300px", marginTop: "25px" , boxShadow:'2px 2px 2px 2px gray' }}
              >
                <img
                  src="https://i.pinimg.com/564x/8c/c4/a9/8cc4a9a172f7bd1cf033a3644ce3c044.jpg"
                  className="card-img-top"
                  alt=""
                  style={{ height: "220px", width: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Change CSS</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>

                  <div className="d-flex justify-content-around">
                    <a
                      href="https://cdpn.io/pen/debug/abWpoOP?authentication_hash=RBMOJbbyBwzk"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Project
                    </a>

                    <a
                      href="https://codepen.io/lakshaysharma/pen/abWpoOP"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              {/* guess random number */}
              <div
                className="card"
                style={{ width: "300px", marginTop: "25px", boxShadow:'2px 2px 2px 2px gray'  }}
              >
                <img
                  src="https://i.pinimg.com/564x/7d/1d/b2/7d1db240475649bc635c085dc11fd6f3.jpg"
                  className="card-img-top"
                  alt=""
                  style={{ height: "220px", width: "300px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Guess Random Number</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="d-flex justify-content-around">
                    <a
                      href="https://cdpn.io/pen/debug/WNjyExm?authentication_hash=ZoABaQQoGBVr"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Project
                    </a>

                    <a
                      href="https://codepen.io/lakshaysharma/pen/WNjyExm"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* html css project */}
      <div>
        <div className="row">
          <h1
            style={{
              fontSze: "30px",
              fontFamily: "arial",
              textAlign: "center",
              marginBottom: "40px",
              marginTop: "20px",
            }}
          >
            HTML & CSS Project
          </h1>
          <div className="col-md-4">
            {/* Tribute Page */}
            <div className="card" style={{ width: "300px", boxShadow:'2px 2px 2px 2px gray'  }}>
              <img
                src="https://i.pinimg.com/564x/94/b4/54/94b454f14c145475b78da427122b29bb.jpg"
                className="card-img-top"
                alt=""
                style={{ height: "220px", width: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Tribute Page</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://cdpn.io/pen/debug/ZEWdVzR?authentication_hash=GnMnbqqnywNM"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Project
                  </a>

                  <a
                    href="https://codepen.io/lakshaysharma/pen/ZEWdVzR"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            {/* Parallax effect */}
            <div className="card" style={{ width: "300px", boxShadow:'2px 2px 2px 2px gray'  }}>
              <img
                src="https://i.pinimg.com/564x/d8/13/db/d813dbbcfeb97cac41f5be92e7c50cfb.jpg"
                className="card-img-top"
                alt=""
                style={{ height: "220px", width: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Parallax Effect</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://cdpn.io/pen/debug/BazBojb?authentication_hash=RBAOJbbyaxar"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Project
                  </a>

                  <a
                    href="https://codepen.io/lakshaysharma/pen/BazBojb"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            {/* Document page */}
            <div className="card" style={{ width: "300px" , boxShadow:'2px 2px 2px 2px gray' }}>
              <img
                src="https://i.pinimg.com/564x/0e/3c/b2/0e3cb27c26c5e468a0114279607f7f67.jpg"
                className="card-img-top"
                alt=""
                style={{ height: "220px", width: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Document Page</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://cdpn.io/pen/debug/BazKzyj?authentication_hash=VJMxxRRwQaLM"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Project
                  </a>

                  <a
                    href="https://codepen.io/lakshaysharma/pen/BazKzyj"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            {/* Product Landing page */}
            <div className="card" style={{ width: "300px", marginTop: "25px", boxShadow:'2px 2px 2px 2px gray'  }}>
              <img
                src="https://i.pinimg.com/564x/8b/7a/3e/8b7a3e7232ab48c0dfba88d26d8bd214.jpg"
                className="card-img-top"
                alt=""
                style={{ height: "220px", width: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Product Landing Page</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://cdpn.io/pen/debug/xxOxmXJ?authentication_hash=NjMYzppyReOr"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Project
                  </a>

                  <a
                    href="https://codepen.io/lakshaysharma/pen/xxOxmXJ"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            {/*Survay from  */}
            <div className="card" style={{ width: "300px", marginTop: "25px", boxShadow:'2px 2px 2px 2px gray'  }}>
              <img
                src="https://i.pinimg.com/564x/58/20/fc/5820fcce2129a4cf61998d520a1d2fda.jpg"
                className="card-img-top"
                alt=""
                style={{ height: "220px", width: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Survay From</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://cdpn.io/pen/debug/QWEyOOa?authentication_hash=GnAnbqqnxNZA"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Project
                  </a>

                  <a
                    href="https://codepen.io/lakshaysharma/pen/QWEyOOa"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            {/* google clone */}
            <div className="card" style={{ width: "300px", marginTop: "25px", boxShadow:'2px 2px 2px 2px gray'  }}>
              <img
                src="https://i.pinimg.com/564x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg"
                className="card-img-top"
                alt=""
                style={{ height: "220px", width: "300px" }}
              />
              <div className="card-body">
                <h5 className="card-title">Google Clone</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-around">
                  <a
                    href="https://cdpn.io/pen/debug/gOMrBqN?authentication_hash=XBrGRNNZVbbM#gmail"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Project
                  </a>

                  <a
                    href="https://codepen.io/lakshaysharma/pen/g"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
