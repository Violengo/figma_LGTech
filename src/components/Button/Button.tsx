import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "../../icons/Icon";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "medium" | "large";
export type IconPosition = "leading" | "trailing";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Swap in any icon from the Material Symbols registry (see src/icons/registry.ts). */
  icon?: IconName;
  /** Where the icon sits relative to the label. Ignored when `iconOnly` is set. */
  iconPosition?: IconPosition;
  /** Renders only the icon, in a square button. Requires `aria-label`. */
  iconOnly?: boolean;
  children?: ReactNode;
};

const iconSizeBySize: Record<ButtonSize, number> = {
  medium: 20,
  large: 24,
};

export function Button({
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "leading",
  iconOnly = false,
  className,
  children,
  "aria-label": ariaLabel,
  ...rest
}: ButtonProps) {
  if (import.meta.env.DEV && iconOnly && !ariaLabel) {
    console.warn("Button: an iconOnly button needs an aria-label for screen reader users.");
  }

  const classes = [styles.button, styles[variant], styles[size], iconOnly && styles.iconOnly, className]
    .filter(Boolean)
    .join(" ");

  const iconElement = icon ? <Icon name={icon} size={iconSizeBySize[size]} /> : null;

  return (
    <button className={classes} aria-label={ariaLabel} {...rest}>
      {iconOnly ? (
        iconElement
      ) : (
        <>
          {icon && iconPosition === "leading" && iconElement}
          {children}
          {icon && iconPosition === "trailing" && iconElement}
        </>
      )}
    </button>
  );
}
