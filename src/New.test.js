import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import New from "./New";

let container = null;
beforeEach(() => {
  // setup dom element as render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exit
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<New />, container);
  });
  expect(container.textContent).toBe("Ay stranger!");

  act(() => {
    render(<New name={"bilal"} />);
    expect(container.textContent).toBe("Hello bilal");
  });
});
