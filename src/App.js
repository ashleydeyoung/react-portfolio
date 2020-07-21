import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ashley DeYoung",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      home: {
        title: "My projects",
        subTitle: "Creating content of all types",
        text: "Checkout my projects below",
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Me",
      },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <nav className="navbar navbar-expand-lg  navbar-transparet bg-transparent p-0">
            <div className="container p-0 h-100 full-width">
              <div className="row w-100 m-0 h-100">
                <div
                  id="clickable"
                  className="col-md-4 h-100 text-white text-center text-nowrap bg-dark py-3 px-0 m-0"
                >
                  <h3>Ashley DeYoung</h3>
                </div>
                <Navbar className="navbar justify-content-right">
                  <Navbar.Toggle
                    className="border-0"
                    aria-controls="navbar-toggle"
                  />
                  <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                      <Link className="nav-link" to="/about">
                        About
                      </Link>
                      <Link className="nav-link" to="/contact">
                        Contact
                      </Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </nav>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
