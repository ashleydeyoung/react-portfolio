import React from "react";
import Container from "react-bootstrap/Container";



function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
 
          <nav className="navbar bottomStyle fixed-bottom navbar-text bg-dark text-center border-top text-white">
            <div className="container  full-width m-0 w-100">
              <div className="row w-100 full-width">
                <div className="col-xl-1"></div>
                <div className="col-xl-9 text-center">Copyright © Ashley DeYoung</div>
                <div className="col-xl-2">
                  <a
                    href="https://github.com/ashleydeyoung"
                    className="text-right text-white"
                  >
                    <i className="fab fa-github"></i>
                  </a>{" "}
                  &nbsp;
                  <a
                    href="https://www.linkedin.com/in/ashleydyches"
                    className="text-right text-white"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>
  
      </Container>
    </footer>
  );
}

export default Footer;
