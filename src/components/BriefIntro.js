import React from "react";
import { motion } from "framer-motion";

function BriefIntro() {
  let styling = {
    // border: "1px solid black",
    height: "100vh",
    textAlign: "center",
    margin: "auto",
  };

  return (
    <div style={styling}>

      <motion.div
      style={{ width:'999px', }}
        initial={{ y: -300, opacity: 0 }}
        animate={{
          scale: 1.5,
          color: "#885EAD",
          y: 200,
          opacity: 1,
          x : 100,
          transition: { duration: 1.2 , type: 'tween',},
        }}

        // style={{ marginTop: "25vh" }}
      >
        <h1 style={{ fontSize: "50px", }}>HI</h1>
        <h2 style={{ fontSize: "30px" }}>I AM LAKSHAY SHARMA</h2>
        <h4 style={{ fontSize: "20px" }}>FRONT END WEB DEVELOPER</h4>
      </motion.div>
    </div>
  );
}

export default BriefIntro;
