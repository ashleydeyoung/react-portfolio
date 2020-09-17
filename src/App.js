import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import Resume from "./assets/images/Resume.pdf";
import Footer from "./components/Footer";
import PorfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ParticleComponent from "./components/ParticleComponent";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Ashley DeYoung",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
      ],
      portfolio: {
        title: "My Playground",
        subTitle: "Where learning and creating collide",
        text: "Checkout a few of my projects below:",
      },
      about: {
        title: "I am Ashley DeYoung",
        subTitle: "A little about me..."
      },
      contact: {
        title: "Contact Me",
        subTitle: "Looking forward to hearing from you."
      },
    };
  }
  
  render() {
    return (

      <Router >
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      ></div>
              <ParticleComponent />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        ></div>
        <Container className="p-0" fluid={true}>
          <Navbar className="navColor text-white" expand="lg">
            <Navbar.Brand className="navColor font3 fontPurple" href="/">
              Ashley DeYoung
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link font2 fontPurple" to="/">
                  Home
                </Link>
                <Link className="nav-link font2 fontPurple" to="/portfolio">
                  Portfolio
                </Link>
                <Link className="nav-link font2 fontPurple" to="/contact">
                  Contact
                </Link>
                <Link className="nav-link font2 fontPurple" to= {Resume} target= "_blank">
                  Resume
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/" exact
            render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} />}
          />
            <Route
              path="/portfolio"
              render={() => <PorfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text} />}
            />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subTitle} />}
          />

          <Footer />
        </Container>

      </Router>
      
    );
  }
}

export default App;
