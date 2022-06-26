import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div style={{ height: "100vh", border: "1px solid black" }}>
      <div>
        <div className="container">
          <h2 style={{color :'#904abf'}}>The Skills i learn</h2>
          <div style={{ border: "1px solid red" }}>
            <div className="d-flex justify-content-center ">
              <motion.p
                whileHover={{
                  scale: 1.4,
                  transition: { duration: 1 },
                }}
                style={{
                  fontSize: "110px",
                  color: "#e34c26",
                  paddingRight: "50px",
                }}
              >
                <i className="fa-brands fa-html5  "></i>
              </motion.p>

              <motion.p
                whileHover={{ scale: 1.4, transition: { duration: 1 } }}
                style={{
                  fontSize: "110px",
                  color: "#3C99DC",
                  paddingRight: "50px",
                }}
              >
                <i className="fa-brands fa-css3-alt "></i>
              </motion.p>

              <motion.p
                whileHover={{ scale: 1.3, transition: { duration: 1 } }}
                style={{
                  fontSize: "110px",
                  color: "#F0DB4F",
                  paddingRight: "50px",
                }}
              >
                <i className="fa-brands fa-js-square "></i>
              </motion.p>
            </div>

            <div className="d-flex justify-content-center">
              <motion.p
                whileHover={{ scale: 1.3, transition: { duration: 1 } }}
                style={{
                  fontSize: "110px",
                  color: "#3C99DC",
                  paddingRight: "50px",
                }}
              >
                <i className="fa-brands fa-react "></i>
              </motion.p>

              <motion.p
                whileHover={{ scale: 1.3, transition: { duration: 1 } }}
                style={{
                  fontSize: "110px",
                  color: "#3E2c00",
                  paddingRight: "50px",
                }}
              >
                <i className="fa-brands fa-git "></i>
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.3, transition: { duration: 1 } }}
                style={{
                  fontSize: "110px",
                  color: "#6e5494",
                  paddingRight: "50px",
                }}
              >
                <i className="fa-brands fa-github "></i>
              </motion.p>
            </div>

            <div className="d-flex justify-content-center">
              <motion.p
                whileHover={{ scale: 1.3, transition: { duration: 1 } }}
                style={{ fontSize: "110px", color: "#080135" }}
              >
                <i className="fa-brands fa-bootstrap"></i>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
