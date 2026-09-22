import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Select } from "./Select";

const options = [
  { value: "1-10", label: "1–10 collaborateurs" },
  { value: "11-50", label: "11–50 collaborateurs" },
];

describe("Select", () => {
  it("shows the placeholder until an option is chosen", () => {
    render(<Select label="Taille de l'entreprise" options={options} />);

    expect(screen.getByRole("button", { name: "Taille de l'entreprise" })).toHaveTextContent(
      "Sélectionner une option",
    );
  });

  it("opens the listbox, selects an option, and calls onChange", async () => {
    const onChange = vi.fn();
    render(<Select label="Taille de l'entreprise" options={options} onChange={onChange} />);

    await userEvent.click(screen.getByRole("button", { name: "Taille de l'entreprise" }));
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await userEvent.click(screen.getByRole("option", { name: "11–50 collaborateurs" }));

    expect(onChange).toHaveBeenCalledWith("11-50");
    expect(screen.getByRole("button", { name: "Taille de l'entreprise" })).toHaveTextContent(
      "11–50 collaborateurs",
    );
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("closes the listbox on Escape", async () => {
    render(<Select label="Taille de l'entreprise" options={options} />);

    const trigger = screen.getByRole("button", { name: "Taille de l'entreprise" });
    await userEvent.click(trigger);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("shows the error message and marks the field invalid", () => {
    render(<Select label="Taille de l'entreprise" options={options} errorMessage="Sélectionnez une option." />);

    expect(screen.getByText("Sélectionnez une option.")).toBeInTheDocument();
  });

  it("is disabled and does not open when disabled", async () => {
    render(<Select label="Taille de l'entreprise" options={options} disabled />);

    const trigger = screen.getByRole("button", { name: "Taille de l'entreprise" });
    expect(trigger).toBeDisabled();

    await userEvent.click(trigger);
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });
});
