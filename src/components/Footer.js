import React from "react";

import Container from "react-bootstrap/Container";
import "../App.css";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <nav className="navbar bottomStyle fixed-bottom navbar-text bg-dark text-center border-top text-white">
          <div className="row w-100 full-width">
            <div className="col font2 text-center">
              Copyright © Ashley DeYoung
            </div>
          </div>
          <div className="row w-100 full-width">
            <div className="col text-center">
              <a
                href="https://github.com/ashleydeyoung" target="_blank" rel="noopener noreferrer"
                className="text-right text-white"
              >
                <i className="fab fa-github"></i>
              </a>{" "}
              &nbsp;
              <a
                href="https://www.linkedin.com/in/ashleydeyoung" target="_blank" rel="noopener noreferrer"
                className="text-right text-white"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </nav>
      </Container>
    </footer>
  );
}

export default Footer;
