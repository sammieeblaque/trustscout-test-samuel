import React from "react";
import { Nav } from "react-bootstrap";
import logo from "../images/trustscout.png";

import SignOutButton from "./SignOut";

import AuthContext from "../contexts/AuthContext";

const Navigation = () => (
  <AuthContext.Consumer>
    {(authUser) =>
      authUser ? <NavigationAuth userInfo={authUser} /> : <NavigationNonAuth />
    }
  </AuthContext.Consumer>
);

const NavigationNonAuth = () => (
  <Nav color="light" navbar style={{ display: "none" }}>
    <Nav.Item>{/* <Link to={routes.LANDING_PAGE}> Landing </Link> */}</Nav.Item>
    {/* <Nav className="ml-auto" navbar> */}
    <Nav.Item>
      <Nav.Link>{/* <Link to={routes.LANDING_PAGE}>Sign In</Link> */}</Nav.Link>
    </Nav.Item>
    {/* </Nav> */}
  </Nav>
);

export default Navigation;

const NavigationAuth = ({ userInfo }: any) => (
  <Nav
    color="dark"
    className="p-3"
    style={{ backgroundColor: "#0000ff14", justifyContent: "space-between" }}
    navbar
  >
    <Nav.Item>
      <img src={logo} height="30px" width="160px" alt="logo" />
    </Nav.Item>
    {/* <Nav.Item>
      <Link to={routes.LANDING_PAGE}> Landing </Link>
    </Nav.Item> */}
    <Nav.Item style={{ marginRight: "40px" }}>
      <SignOutButton />
    </Nav.Item>
    {/* </Nav> */}
  </Nav>
);
