import React from "react";
import {motion} from "framer-motion";

const HoverVariants= {
  Hover : {
    scale: 1.2,
    color : 'red'
  }
}

const imgVariants = {
 animate :{
  scale : 1.1,
  transition : {
    // duration:0.1,
    yoyo : Infinity
  }
 }
}

function AboutMe() {
  return (
    <div style={{ height: "100vh", border: "1px solid black" }}>
      <div className="container">
        <motion.div
       
        >
          <h1>About Me</h1>
          <div
            className="d-flex"
            style={{ fontSize: "20px", textAlign: "justify" }}
          >
            <motion.p 
            variants={HoverVariants}
            whileHover='Hover'
            style={{ width: "45vw" }}>
              i have a huge interest in development and technology spectrum, my
              name is lakshay sharma 20 and i am a self thought front end wen
              developer, its been since 2 years that i learn front end web
              developemnet and the skills i aquired in last 2 years are
              HTML,CSS,JAVSCRIPT,react js, bootstrap, git, and git hub,and the
              leraning process goes on in future. i am a well organised, smart
              working man with the problem solving skill. excited to work and
              gain new experience that help me learn and grow as a developer.
              <br />
              And apart from coding i have some more interest like i read books,
              watch classical movies, shows, and anime
            </motion.p>
            <motion.img
            variants={imgVariants}
            whileHover='animate'

              src="./image/lak.png"
              style={{
                height: "270px",
                width: "270px",
                borderRadius: "50%",
                marginLeft: "30px",
                marginTop: "30px",
                boxShadow: "5px 5px 5px gray",
              }}
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMe;
