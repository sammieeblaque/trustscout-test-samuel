import { render, screen } from "@testing-library/react";

import { SignupForm } from "../components/SignupForm";

describe("SignInForm", () => {
  test("renders Signin Form", () => {
    render(<SignupForm />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
  });
});
