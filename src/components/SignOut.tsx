import React from "react";
import { Button } from "react-bootstrap";

import { auth } from "../firebase";

const SignOutButton = () => (
  <>
    <div>
      <Button
        color="info"
        className="pr-4 pl-4 nav__button"
        onClick={auth.doSignOut}
      >
        Sign Out
      </Button>
    </div>
  </>
);

export default SignOutButton;
