import { SignupForm } from "../components/SignupForm";
import background from "../images/background2.jpg";
import logo from "../images/trustscout.png";

const SignUp = () => (
  <>
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
          <SignupForm />
        </div>
      </div>
    </div>
  </>
);
export default SignUp;
