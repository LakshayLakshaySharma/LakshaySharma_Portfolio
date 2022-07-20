import React from "react";

export default function ContactMe() {
  return (
    // style={{ background: "linear-gradient(to bottom, #ffffff 0%, #cc00ff  100%)", }}
    <div>
      {/* <!-- Footer --> */}
      <footer
        className="text-center text-lg-start bg-white text-muted"
        style={{
          marginTop: "30vh",
          // background: "linear-gradient(to bottom, #ffffff 0%, #904abf  100%)",/
          background: "linear-gradient(to top, #ffffff 0%, #904abf  100%)", 
          height:'100vh'
        }}
      >
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <b><span style={{color:'black'}}>Get connected with me on social networks:</span></b>
          </div>
          {/* <!-- Left --> */}
          {/*  */}
          {/* <!-- Right --> */}
          <div>
            <a
              href="https://m.facebook.com/100025166202480/"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"

            >
              <i className="fab fa-facebook-f" style={{color:'black',textShadow:'3px 3px 5px white'}}></i>
            </a>
            <a
              href="https://twitter.com/Lakshay35660321?t=kScv_UWVtqgcfEDrVYkYrA&s=09"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter" style={{color:'black', textShadow:'3px 3px 5px white'}}></i>
            </a>
            <a
              href="https://codepen.io/your-work/?item_type=pen"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-codepen" style={{color:'black' ,textShadow:'3px 3px 5px white'}}></i>
            </a>
            <a
              href="https://www.instagram.com/lakshays9625/"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram" style={{color:'black', textShadow:'3px 3px 5px white'}}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/lakshay-sharma-4a8a9a230"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" style={{color:'black', textShadow:'3px 3px 5px white'}}></i>
            </a>
            <a
              href="https://github.com/LakshayLakshaySharma"
              className="me-4 text-reset"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github" style={{color:'black', textShadow:'3px 3px 5px white'}}></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* <!-- Grid row --> */}
            <div className="row mt-3">
              {/* <!-- Grid column --> */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4" style={{color:'black'}}>
                  <i className="fas fa-gem me-3" style={{color:'black'}}></i>LakshaySharma
                </h6>
                <p style={{color:'black'}}>
        
                </p>
              </div>
              {/* <!-- Grid column --> */}

              {/* <!-- Grid column --> */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4" style={{color:'black'}}>Technical Skills</h6>
                <p  style={{color:'black'}}>
                  {/* <a href="#!" className="text-reset"> */}
                    Javascript
                  {/* </a> */}
                </p>
                <p style={{color:'black',}}>
                  {/* <a href="#!" className="text-reset" > */}
                    React
                  {/* </a> */}
                </p>
                <p style={{color:'black'}}>
                  {/* <a href="#!" className="text-reset" > */}
                    Bootstrap
                  {/* </a> */}
                </p>
                <p style={{color:'black'}}>
                  {/* <a href="#!" className="text-reset" > */}
                    HTML&CSS
                  {/* </a> */}
                </p>
                <p style={{color:'black'}}>
                  {/* <a href="#!" className="text-reset" > */}
                    GIT&GITHUB
                  {/* </a> */}
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{color:'black'}}>
                {/* <!-- Links/ --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New Delhi, India
                </p>
                <p >
                  <a href ="mailto:lakshay0sharma@gmail.com" style={{color:'black'}}>
                  <i className="fas fa-envelope me-3"></i>
                  lakshay0sharma@gmail.com
                </a>
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +91 7428182174
                </p>
                {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
              </div>
              {/* <!-- Grid column --> */}
            </div>
            {/* <!-- Grid row --> */}
          </div>
        </section>
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
}
