import { render, cleanup, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { SignInForm } from "../SignInForm";

afterEach(() => {
  cleanup();
});

describe("to run tests", () => {
  test("should render SignIn", () => {
    let history;
    render(<SignInForm history={history} />);
    const signinElement = screen.getByTestId("signin");
    expect(signinElement).toBeInTheDocument();
  });
});

test("Should match snapshot", () => {
  let history;
  const tree = renderer.create(<SignInForm history={history} />).toJSON();
  expect(tree).toMatchSnapshot();
});
