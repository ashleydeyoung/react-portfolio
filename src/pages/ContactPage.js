import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Hero from "../components/Hero";
import Content from "../components/Content";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <Hero title={this.props.title} subTitle= {this.props.subTitle} />

        <Content>
          <Form
            onSubmit={this.submitForm}
            action="https://formspree.io/xdowyoky"
            method="POST"
          >
            <Form.Group>
              <Form.Label htmlFor="full-name">Full Name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="message">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows="3"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            {status === "SUCCESS" ? (
              <div class="alert alert-success" role="alert">
                Success! Thank you!
              </div>
            ) : (
              <Button
                className="d-inline-block"
                variant="primary"
                type="submit"
              >
                Send
              </Button>
            )}
            {status === "ERROR" && (
              <div class="alert alert-danger" role="alert">
                Oops, there was an error!
              </div>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
