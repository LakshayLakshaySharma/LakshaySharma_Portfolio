import React from "react";
import { motion } from "framer-motion";

function BriefIntro() {
  let styling = {
    height: "100vh",
    textAlign: "center",
    margin: "auto",
    background: "linear-gradient(to top, #ffffff 0%, #904abf  100%)",
  };

  return (
    <div style={styling}>

      <motion.div
        style={{
          height: "100vh",
         
        }}

     init={{
      y : -500,
      opacity : 0
     }}
     animate ={{
      y : 200,
      opacity : 1,
      color : 'white',
      textShadow:'2px 2px 3px purple',
      // scale : 1.1,
      transition:{duration : 2, type :'tween'}
     }}
      
      >
        <h1 style={{ fontSize: "70px" }}>HI</h1>
        <h2 style={{ fontSize: "40px" }}>I AM LAKSHAY SHARMA</h2>
        <h4 style={{ fontSize: "30px" }}>FRONT END WEB DEVELOPER</h4>
      </motion.div>
    </div>
  );
}

export default BriefIntro;
// #904abf