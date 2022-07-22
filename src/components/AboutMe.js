import React from "react";
import { motion } from "framer-motion";

function AboutMe() {
  return (
    <div className= "container "style={{ height: "100vh" }}>
      <motion.div className="container-fluid">
        <div>
          <h1
            style={{
              color: "#904abf",
              textShadow: "1px 1px 1px black",
              borderBottom: "1px solid #904abf",
              
            }}
          >
            About Me
          </h1>
          <div
            className="d-flex"
            style={{ fontSize: "1.4em", textAlign: "justify",  }}
          >
            <p style={{ maxWidth: "45vw", maxHeight:'50vh',fontFamily: "cursive" }}>
             My name is Lakshay Sharma 20, I am a self-taught front-end web
              developer, i have a considerable interest in the development and
              whole technology spectrum, it's been since 2 years that i learned
              front-end web development and the skills i acquired in the last 2
              years are Html, CSS, Javascript, React js, Bootstrap, Git, and
              Github, and the learning process goes on in future. I am a
              well-organized, smart working man with problem-solving skills.
              excited to work and gain new experience that helps me learn and
              grow as a developer.
              <br />
              And apart from coding, I have some more interests like I read
              books, watching classical movies, shows, and anime
            </p>
            <motion.img
              initial={{
                scale: 1.1,
              }}
              // animate={{

              // }}

              whileHover={{
                // borderRadius: "30%",
                border: "1px solid black",
                // boxShadow: "5px 5px 5px #904abf",
                transition: { duration: 2 },
              }}
              // src="./image/lak.png"
              src="https://i.pinimg.com/750x/c4/71/0d/c4710d2d7b42ea503a5b2d07f7e3e31c.jpg"
              // src="https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              style={{
                height: "350px",
                width: "300px",
                borderRadius: "30%",
                marginLeft: "60px",
                marginTop: "30px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #904abf",
                backgroundAttachment:'fixed'
              }}
              alt=""
            />
          </div>
          {/* <hr/> */}
        </div>
      </motion.div>
    </div>
  );
}

export default AboutMe;
