import React from "react";
import {motion} from 'framer-motion';

function AboutMe() {
  return (
    <div style={{ height: "100vh", }}>
      <motion.div className="container">
        <div>
          <h1 style={{color :'#904abf', textShadow:'1px 1px 1px black', borderBottom:"1px solid #904abf"}}>About Me</h1>
          <div
            className="d-flex"
            style={{ fontSize: "20px", textAlign: "justify" }}
          >
            <p style={{ width: "45vw" , fontFamily:'cursive' }}>
              My name is Lakshay Sharma 20 and I am a self thought front-end web 
              developer, i have a huge interest in development and whole technology
              spectrum, its been since 2 years that i learn front end web
              development and the skills i aquired in last 2 years are
              html, css, javascript,react js, bootstrap, git, and git hub,and the
              learning process goes on in future. i am a well organised, smart
              working man with the problem solving skill. excited to work and
              gain new experience that help me learn and grow as a developer.
              <br />
              And apart from coding i have some more interest like i read books,
              watch classical movies, shows, and anime
            </p>
            <motion.img
            initial={{
              scale:1.1
            }}
            // animate={{
              
            // }}
         
            whileHover={{
              borderRadius:'30%',
              border:'1px solid black',
              boxShadow: "5px 5px 5px #904abf",
              transition:{duration:2}
            }}
              src="./image/lak.png"
              style={{
                height: "270px",
                width: "270px",
                borderRadius: "50%",
                marginLeft: "60px",
                marginTop: "30px",
                boxShadow: "5px 5px 5px #904abf",
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
