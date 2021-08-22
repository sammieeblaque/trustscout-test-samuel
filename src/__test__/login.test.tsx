// import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import SignInForm from "../components/SignInForm";

describe("SignInForm", () => {
  test("renders Signin Form", () => {
    render(<SignInForm />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("checks user interaction", () => {
    const { queryByPlaceholderText } = render(<SignInForm />);

    const emailInput: any = queryByPlaceholderText("john@xyz.com");

    fireEvent.change(emailInput, { target: { value: "jane@gmail.com" } });

    expect(emailInput.value).toBe("jane@gmail.com");
  });
});
