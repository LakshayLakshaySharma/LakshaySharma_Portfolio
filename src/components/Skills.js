import React from "react";
import { motion } from "framer-motion";

//  style={{ height: "100vh" }}
function Skills() {
  return (
    <div  className="container">

      <div>
        <div>
          <motion.h1
          
          // animate={{
          //   opacity:1,
           
          // }}
          // whileHover={{
          //   transition:{duration:0.5}
          // }}
          style={{color:'#904abf', borderBottom:'1px solid #904abf', textShadow :'1px 1px 1px black'}} >Technical Skills</motion.h1>

          {/* container for skills icons and progress baar */}
          <div className="text-center row">
            {/* html container */}
            <div className="col-md-4">
            <motion.div
          
            style={{
              height :'300px',
              width:'350px',
             
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dolores obcaecati natus libero repellendus impedit ea molestiae
                beatae tempore dicta, dignissimos delectus. Voluptatibus
                molestias odit blanditiis impedit, ipsam dolore magnam?
              </p>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: "50%", backgroundColor: "#e34c26" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
            </motion.div>
            </div>

            {/* css  */}
            <div className="col-md-4">
            <div 
              style={{
                height :'300px',
                width:'350px',
               
              }}>
              <i
                className="fa-brands fa-css3-alt "
                style={{
                  fontSize: "100px",
                  color: "#3C99DC",
                  textAlign: "center",
                }}
              ></i>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                totam consequatur sapiente nemo inventore reprehenderit
                consectetur, iure explicabo exercitationem rerum omnis suscipit
                dolore doloribus sed. Sequi laborum laboriosam assumenda magnam.
              </p>
              <div className="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: "50%", backgroundColor: "#3C99DC" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
            </div>
</div>
            {/* javascript container  */}
            <div className="col-md-4">
            <div
               style={{
                height :'300px',
                width:'350px',
              }}>
              <i
                className="fa-brands fa-js-square "
                style={{
                  fontSize: "100px",
                  color: "#F0DB4F",
                  textAlign: "center",
                }}
              ></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                enim a nihil adipisci ad fuga dolor consectetur blanditiis?
                Recusandae, deleniti? Ipsa quia consequatur quidem deleniti
                consequuntur aliquid illum nulla debitis.
              </p>
              <div className="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: "50%", backgroundColor: "#F0DB4F" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
            </div>
</div>
            {/* react comtainer  */}
            <motion.div
          
            >
              <motion.i
                animate={{
                  rotate:360,
                  transition:{yoyo :Infinity, duration:4}
                }}
                className="fa-brands fa-react "
                style={{
                  fontSize: "100px",
                  color: "#3C99DC",
                  textAlign: "center",
                }}
              ></motion.i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ullam non at excepturi, eligendi, alias sit quae
                porro ipsa et id, dicta nam. Molestias minus, accusamus fugit
                recusandae maiores voluptas.
              </p>
              <div className="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: "50%", backgroundColor: "#3c99dc" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
            </motion.div>

            {/* bootstrap */}
            <div className="col-md-4">
            <div 
             style={{
              height :'300px',
              width:'350px',
            }}>
              <i
                className="fa-brands fa-bootstrap"
                style={{
                  fontSize: "100px",
                  color: "#080135",
                  textAlign: "center",
                }}
              ></i>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                alias architecto totam deserunt et sint maiores placeat eaque,
                repudiandae cumque iste inventore asperiores temporibus nam
                doloribus itaque nostrum sequi explicabo?
              </p>
              <div className="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: "50%", backgroundColor: "#080135" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
            </div>
            </div>

            {/* git  */}
            <div className="col-md-4">
            <div  style={{
                height :'300px',
                width:'350px',
              }}> 
              <i
                className="fa-brands fa-git "
                style={{
                  fontSize: "100px",
                  color: "#3E2c00",
                  textAlign: "center",
                }}
              ></i>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eligendi deleniti nemo in quibusdam, alias nam magnam enim,
                pariatur perferendis, rem magni ex cumque quisquam culpa aliquam
                porro voluptatibus fuga esse.
              </p>
              <div className="progress">
                <div
                  class="progress-bar progress-bar-striped"
                  role="progressbar"
                  style={{ width: "50%", backgroundColor: "#3E2c00" }}
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
            </div>
            </div>

            {/* git hub */}
            <div className="col-md-4">
            <div 
             style={{
              height :'300px',
              width:'350px',
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
</div>

          </div>
          {/* <hr/> */}
        </div>
        
      </div>
    
    </div>
  );
}

export default Skills;
