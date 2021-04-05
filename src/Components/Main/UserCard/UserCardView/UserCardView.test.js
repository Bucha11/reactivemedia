import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { UserCardView } from "./UserCardView";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with name", () => {
  act(() => {
    render(<UserCardView name="Jenny" />, container);
  });
  expect(container.textContent).toBe("Jenny");

  act(() => {
    render(<UserCardView name="Margaret" />, container);
  });
  expect(container.textContent).toBe("Margaret");
});
