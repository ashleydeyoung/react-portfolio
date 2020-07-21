import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../App.css";

function Content(props) {

    return(
        <Container fluid={false} className=" p-3">
            <Row className="justify-content-center">
                <Col md={8} className="see p-3">
                    {props.children}
                </Col>
            </Row>
        </Container>
    );

}

export default Content;