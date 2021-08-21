import SignInForm from "../components/SignInForm";
import background from "../images/background.jpg";
import logo from "../images/trustscout.png";

const SignIn = () => (
  <>
    <div className="row">
      <div className="col-md-8 m__display">
        <img src={background} className="full__size" alt="Background" />
      </div>
      <div className="col-md-4">
        <div className="margin__up left__pad">
          <img
            style={{ marginLeft: "25%", height: "30px" }}
            src={logo}
            alt="Logo"
          />

          <SignInForm />
        </div>
      </div>
    </div>
  </>
);

export default SignIn;
