import { icons, type IconName } from "./registry";
import styles from "./Icon.module.css";

export type { IconName };

export type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  /** Accessible name. Omit for a purely decorative icon (e.g. next to a visible label). */
  title?: string;
};

export function Icon({ name, size = 20, className, title }: IconProps) {
  return (
    <span
      className={[styles.icon, className].filter(Boolean).join(" ")}
      style={{ width: size, height: size, color: "currentColor" }}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  );
}
