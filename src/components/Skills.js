import React from "react";
import { motion } from "framer-motion";

//  style={{ height: "100vh" }}
function Skills() {
  return (
    <div className="container">
      <div>
        <div>
          <motion.h1
            // animate={{
            //   opacity:1,

            // }}
            // whileHover={{
            //   transition:{duration:0.5}
            // }}
            style={{
              color: "#904abf",
              borderBottom: "1px solid #904abf",
              textShadow: "1px 1px 1px black",
              fontStyle:'justify'
            }}
          >
            Technical Skills
          </motion.h1>

          {/* container for skills icons and progress baar */}
          <div className="text-center row">
            {/* html container */}
            <div className="col-md-4">
              <motion.div
                style={{
                  height: "300px",
                  width: "350px",
                  // textAlign:'center'
                }}
              >
                <i
                  className="fa-brands fa-html5  "
                  style={{
                    fontSize: "100px",
                    color: "#e34c26",
                    textAlign: "center",

                  }}
                ></i>
                <p>
                  HTML is the standard markup language for web pages. it use to
                  to structure the content on your own website.checkout my
                  W3School 
                  <a
                    href="https://my-learning.w3schools.com/tutorial/html"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color:'#e34c26'
                    }}
                  >
                  HTML Progression.
                  </a>
                  And this is my HTML Quiz result.
                </p>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-striped active"
                    role="progressbar"
                    style={{ width: "85%", backgroundColor: "#e34c26" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    85%
                  </div>
                </div>
              </motion.div>
            </div>

            {/* css  */}
            <div className="col-md-4">
              <div
                style={{
                  height: "300px",
                  width: "350px",
                }}
              >
                <i
                  className="fa-brands fa-css3-alt "
                  style={{
                    fontSize: "100px",
                    color: "#3C99DC",
                    textAlign: "center",
                  }}
                ></i>
                <p>
                CSS is the language used to style an HTML document, and describes how elements should be displayed. and cgeckout my w3school 
                <a
                    href="https://my-learning.w3schools.com/tutorial/css"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color:'#3C99Dc'
                    }}
                  >
                  CSS Progression.
                  </a>
                  And this is my CSS Quiz result

                </p>
                <div className="progress">
                  <div
                    class="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "88%", backgroundColor: "#3C99DC" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    88%
                  </div>
                </div>
              </div>
            </div>
            {/* javascript container  */}
            <div className="col-md-4">
              <div
                style={{
                  height: "300px",
                  width: "350px",
                }}
              >
                <i
                  className="fa-brands fa-js-square "
                  style={{
                    fontSize: "100px",
                    color: "#F0DB4F",
                    textAlign: "center",
                  }}
                ></i>
                <p>
                JavaScript is a programming language that can be used to make content dynamic, control multimedia and make elements move.
                <a
                    href="https://my-learning.w3schools.com/tutorial/js"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color:'#F0Db4F'
                    }}
                  >
                  CSS Progression.
                  </a>
                  And this is my Javascrip Quiz result
                </p>
                <div className="progress">
                  <div
                    class="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "96%", backgroundColor: "#F0DB4F" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    96%
                  </div>
                </div>
              </div>
            </div>
            {/* react comtainer  */}
            <motion.div className="col-md-4"
             style={{
              height: "300px",
              width: "350px",
        
            }}
            >


              <motion.i
                // animate={{
                //   rotate:360,
                //   transition:{yoyo :Infinity, duration:4}
                // }}
                className="fa-brands fa-react "
                style={{
                  fontSize: "100px",
                  color: "#3C99DC",
                  textAlign: "center",

                }}
              ></motion.i>
              <p>
              React is a very efficient and flexible JavaScript library for building user interfaces.
              <a
                    href="https://my-learning.w3schools.com/tutorial/react"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color:'#3C99DC'
                    }}
                  >
                  React JS Progression.
                  </a>
                  And this is my React Quiz result
              </p>
              <div className="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: "52%", backgroundColor: "#3c99dc" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  52%
                </div>
              </div>
            </motion.div>

            {/* bootstrap */}
            <div className="col-md-4" >
              <div
                style={{
                  height: "300px",
                  width: "350px",
                  
                }}
              >
                <i
                  className="fa-brands fa-bootstrap"
                  style={{
                    fontSize: "100px",
                    color: "#080135",
                    textAlign: "center",
                  }}
                ></i>
                <p>
                Bootstrap is a front-end toolkit to quickly design and customize responsive mobile-first sites.
                <a
                    href="https://my-learning.w3schools.com/tutorial/bootstrap5"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color:'#080135'
                    }}
                  >
                  React Bootstrap Progression.
                  </a>
                  And this is my React Quiz result
                </p>
                <div className="progress">
                  <div
                    class="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "68%", backgroundColor: "#080135" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    68%
                  </div>
                </div>
              </div>
            </div>

            {/* git  */}
            <div className="col-md-4">
              <div
                style={{
                  height: "300px",
                  width: "350px",
                  
                }}
              >
                <i
                  className="fa-brands fa-git "
                  style={{
                    fontSize: "100px",
                    color: "#3E2c00",
                    textAlign: "center",
                    padding:'10px'
                  }}
                ></i>
                  

                <p>
                Git is a version control system, that helps you keep track of code changes and to collaborate with others.
                <a
                    href="https://my-learning.w3schools.com/tutorial/git"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color:'#3e2c00'
                    }}
                  >
                  React Git Progression.
                  </a>
                  And this is my Git Quiz result
           
                </p>
                <div className="progress">
                  <div
                    class="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "84%", backgroundColor: "#3E2c00" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    84%
                  </div>
                </div>
              </div>
            </div>

            {/* git hub */}
            {/* <div className="col-md-4">
              <div
                style={{
                  height: "300px",
                  width: "350px",
                }}
              >
                <i
                  className="fa-brands fa-github "
                  style={{
                    fontSize: "100px",
                    color: "#6e5494",
                    textAlign: "center",
                  }}
                ></i>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus consequatur dolores corporis! Tempore voluptatibus
                  impedit cum porro est qui voluptatem in quod aperiam ad
                  excepturi placeat non, autem veniam inventore.
                </p>
                <div className="progress">
                  <div
                    class="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "50%", backgroundColor: "#6e5494" }}
                    aria-valuenow="10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    50%
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <hr/> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
