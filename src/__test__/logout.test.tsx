import { render, screen } from "@testing-library/react";

import SignOut from "../components/SignOut";

describe("SignOut", () => {
  test("render SignOut", () => {
    render(<SignOut />);
    expect(screen.getByText("Sign Out")).toBeInTheDocument();
  });
});
