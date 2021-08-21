import React, { Component, SyntheticEvent } from "react";
import { Button, Card, Form, Alert } from "react-bootstrap";

import * as routes from "../routes";
import { auth, db } from "../firebase/";

interface IinitialState {
  username: string;
  email: string;
  password: string;
  error: any;
  showAlert: boolean;
}

interface IUserProps {
  history?: any;
}

class SignupForm extends Component<IUserProps> {
  state: IinitialState = {
    username: "",
    email: "",
    password: "",
    error: null,
    showAlert: false,
  };

  onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    const { username, password, email } = this.state;
    const { history } = this.props;
    try {
      const authUser = await auth.doCreateUserWithEmailAndPassword(
        email,
        password
      );
      await db.doCreateUser(authUser.user?.uid ?? "", username, email);
      await this.setState({ ...this.state });
      // console.log(this.state);
      history.push(routes.HOME);
    } catch (error) {
      this.setState({ error: error, showAlert: true });
    }
  };

  render() {
    const { username, password, email, showAlert, error } = this.state;
    return (
      <>
        <div data-testid="signup">
          <Card className="no__border left__pad">
            <Card.Body className="w__90">
              <h2 className="text-center mb-4">Sign Up</h2>
              {showAlert && (
                <Alert
                  variant="danger"
                  onClose={() => this.setState({ showAlert: false })}
                  dismissible
                >
                  {error.message}
                </Alert>
              )}
              <Form onSubmit={this.onSubmit}>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="John Doe"
                    value={username}
                    onChange={(e) =>
                      this.setState({ username: e.target.value })
                    }
                    required
                  />
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    placeholder="john@xyz.com"
                    value={email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                    required
                  />
                </Form.Group>
                <Button className="w-100 button__color" type="submit">
                  Sign Up
                </Button>
                <div className="text-center">
                  <p>
                    Already have an account?{" "}
                    <a href={routes.LANDING_PAGE}>Sign In</a>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <a href={routes.SIGN_UP}>Sign Up</a>
  </p>
);

export { SignupForm, SignUpLink };
