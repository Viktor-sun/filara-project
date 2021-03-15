import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
import "./RegistrationForm.css";

class RegistrationForm extends Component {
  state = { email: "", password: "" };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;
    const { title } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className="RegistrationForm">
        <h2>{title}</h2>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ваш emeil</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

RegistrationForm.propsTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegistrationForm;
