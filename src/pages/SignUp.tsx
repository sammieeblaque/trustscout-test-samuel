import React, { FC } from "react";
import { SignupForm } from "../components/SignupForm";
import { RouteComponentProps } from "react-router-dom";
import background from "../images/background2.jpg";
import logo from "../images/trustscout.png";

interface IUserProps {
  history?: RouteComponentProps;
}

const SignUp: FC<IUserProps> = ({ history }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8 m__display">
          <img src={background} className="full__size" alt="Background" />
        </div>
        <div className="col-md-4">
          <div className="margin__up__signup left__pad">
            <img
              style={{ marginLeft: "25%", height: "30px" }}
              src={logo}
              alt="Logo"
            />
            <SignupForm history={history} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
