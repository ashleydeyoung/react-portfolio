import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function PorfolioPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Container className="bg-transparent p-3">
      <Row className="justify-content-center">
      <Col>
        <Carousel />
      </Col>
            </Row>
      </Container>
    </div>
  );
}

export default PorfolioPage;
