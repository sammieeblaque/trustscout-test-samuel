import { useState } from "react";
import { Button, Form, Card, Alert } from "react-bootstrap";
import {useHistory } from 'react-router-dom'
import { SignUpLink } from "./SignupForm";

import * as routes from "../routes";
import { auth } from "../firebase";



const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<Object>({});
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory()
  
   const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      auth.doSignInWithEmailAndPassword(email, password);
      Promise.all([setEmail(""), setPassword("")])
      history.push(routes.HOME)
    } catch (error) {
      Promise.all([setError(error),setShowAlert(true)])
    }
  };

  return (
    <>
       <div data-testid="signin">
          <Card className="no__border left__pad">
            <Card.Body className="w__90">
              <h2 className="text-center mb-4">Sign In</h2>
            {showAlert && (
              <Alert
                variant="danger"
                onClose={() => setShowAlert(false)}
                dismissible
              >
                { error?.message}
              </Alert>
            )}
            <Form onSubmit={onSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="john@xyz.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
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
  )
}

export { SignInForm };
