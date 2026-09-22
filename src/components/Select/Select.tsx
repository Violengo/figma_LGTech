import { useEffect, useId, useRef, useState } from "react";
import styles from "./Select.module.css";

export type SelectOption = {
  value: string;
  label: string;
};

export type SelectProps = {
  label: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  errorMessage?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
};

export function Select({
  label,
  options,
  value,
  defaultValue,
  placeholder = "Sélectionner une option",
  errorMessage,
  disabled = false,
  onChange,
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const selectedValue = value ?? internalValue;
  const selectedOption = options.find((option) => option.value === selectedValue);
  const isError = Boolean(errorMessage) && !disabled;

  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function selectOption(option: SelectOption) {
    setInternalValue(option.value);
    onChange?.(option.value);
    setOpen(false);
  }

  function handleTriggerKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Escape") {
      setOpen(false);
    } else if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
    }
  }

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")} ref={rootRef} data-disabled={disabled}>
      <label className={styles.label} id={`${listId}-label`}>
        {label}
      </label>
      <button
        type="button"
        className={styles.field}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${listId}-label`}
        data-open={open}
        data-filled={Boolean(selectedOption)}
        data-error={isError}
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleTriggerKeyDown}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg className={styles.chevron} viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {isError && <p className={styles.errorText}>{errorMessage}</p>}
      {open && (
        <ul className={styles.menu} role="listbox" aria-labelledby={`${listId}-label`}>
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === selectedValue}
              className={[styles.option, option.value === selectedValue ? styles.optionSelected : ""].join(" ")}
              onClick={() => selectOption(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
