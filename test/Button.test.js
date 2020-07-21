import { render, getByText, fireEvent } from "@testing-library/react";
import React from "react";
import Button from "components/Button";

describe("Button", () => {
  test("should display text", () => {
    const { container } = render(<Button>We Salute You!</Button>);

    getByText(container, "We Salute You!");
  });
});

describe("Button", () => {
  test("should handle click events", () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Button onClick={onClickMock}>Click me, maybe?</Button>
    );
    const component = container.firstChild;

    fireEvent.click(component);

    expect(onClickMock).toBeCalled();
  });
});

test("should make text uppercase", () => {
  const { container } = render(<Button>We Salute You!</Button>);
  const component = getByText(container, "We Salute You!");

  expect(component).toHaveStyleRule("text-transform", "uppercase");
});
