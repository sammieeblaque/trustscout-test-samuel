import { render, cleanup, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { SignupForm } from "../SignupForm";

afterEach(() => {
  cleanup();
});

describe("to run tests", () => {
  test("should render SignUp", () => {
    let history;
    render(<SignupForm history={history} />);
    const signupElement = screen.getByTestId("signup");
    expect(signupElement).toBeInTheDocument();
  });
});

test("Matches Signup Snapshot", () => {
  let history;
  const tree = renderer.create(<SignupForm history={history} />).toJSON();
  expect(tree).toMatchSnapshot();
});
