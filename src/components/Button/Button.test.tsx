import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its label and responds to clicks", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Demander un audit</Button>);

    const button = screen.getByRole("button", { name: "Demander un audit" });
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("does not fire onClick when disabled", async () => {
    const onClick = vi.fn();
    render(
      <Button onClick={onClick} disabled>
        Demander un audit
      </Button>,
    );

    await userEvent.click(screen.getByRole("button"));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders a leading icon before the label by default", () => {
    render(
      <Button icon="arrow-forward" iconOnly={false}>
        Continuer
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Continuer" });
    const icon = button.querySelector("svg");
    expect(icon).toBeInTheDocument();
    expect(button.firstElementChild).toBe(icon?.parentElement);
  });

  it("places the icon after the label when iconPosition is trailing", () => {
    render(
      <Button icon="arrow-forward" iconPosition="trailing">
        Continuer
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Continuer" });
    const icon = button.querySelector("svg");
    expect(button.lastElementChild).toBe(icon?.parentElement);
  });

  it("renders an accessible icon-only button", () => {
    render(<Button icon="close" iconOnly aria-label="Fermer" />);

    expect(screen.getByRole("button", { name: "Fermer" })).toBeInTheDocument();
  });
});
