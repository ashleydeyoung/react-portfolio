import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css";

function Hero(props) {

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        { props.title && <h2 className="display-3 font1 text-white font-weight-bolder">{props.title}</h2> }
                        { props.subTitle && <h3 className="display-5 text-white font1 font-italic font-weight-light">{props.subTitle}</h3> }
                        <br/>
                        { props.text && <h3 className="lead font1 text-white font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}


export default Hero;