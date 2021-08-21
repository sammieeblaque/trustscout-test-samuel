import { useState } from "react";
import { Button, Form, Card, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { SignUpLink } from "./SignupForm";

import * as routes from "../routes";
import { auth } from "../firebase";

interface IinitialState {
  email: string;
  password: string;
  error: any;
  showAlert: boolean;
}

const SignInForm = () => {
  const history = useHistory();
  const [data, setData] = useState<IinitialState>({
    email: "",
    password: "",
    error: null,
    showAlert: false,
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      await auth.doSignInWithEmailAndPassword(email, password);
      await setData({ ...data });
      history.push(routes.HOME);
    } catch (error) {
      await setData({ ...data, error: error, showAlert: true });
      console.error(error);
    }
  };

  const setEmail = (e: any) => setData({ ...data, email: e.target.value });
  const setPassword = (e: any) =>
    setData({ ...data, password: e.target.value });

  const { password, email, showAlert, error } = data;
  return (
    <>
      <div data-testid="signin">
        <Card className="no__border left__pad">
          <Card.Body className="w__90">
            <h2 className="text-center mb-4">Sign In</h2>
            {showAlert && (
              <Alert
                variant="danger"
                onClose={() => setData({ ...data, showAlert: false })}
                dismissible
              >
                {error.message}
              </Alert>
            )}
            <Form onSubmit={onSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="john@xyz.com"
                  value={email}
                  onChange={setEmail}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={setPassword}
                  required
                />
              </Form.Group>
              <Button className="w-100 button__color" type="submit">
                Sign In
              </Button>
              <div className="text-center">
                <SignUpLink />
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SignInForm;
