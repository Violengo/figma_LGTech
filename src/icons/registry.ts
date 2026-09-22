/*
 * Icon registry — backed by @material-symbols/svg-400 (outlined style),
 * matching the "Material 3 Design Kit" library referenced in the Figma file.
 * Add an icon: import its raw SVG below and add one line to `icons`.
 * Full catalogue: https://fonts.google.com/icons
 */
import addCircle from "@material-symbols/svg-400/outlined/add_circle.svg?raw";
import arrowBack from "@material-symbols/svg-400/outlined/arrow_back.svg?raw";
import arrowForward from "@material-symbols/svg-400/outlined/arrow_forward.svg?raw";
import call from "@material-symbols/svg-400/outlined/call.svg?raw";
import check from "@material-symbols/svg-400/outlined/check.svg?raw";
import chevronRight from "@material-symbols/svg-400/outlined/chevron_right.svg?raw";
import close from "@material-symbols/svg-400/outlined/close.svg?raw";
import download from "@material-symbols/svg-400/outlined/download.svg?raw";
import info from "@material-symbols/svg-400/outlined/info.svg?raw";
import mail from "@material-symbols/svg-400/outlined/mail.svg?raw";
import search from "@material-symbols/svg-400/outlined/search.svg?raw";
import settings from "@material-symbols/svg-400/outlined/settings.svg?raw";
import shield from "@material-symbols/svg-400/outlined/shield.svg?raw";
import warning from "@material-symbols/svg-400/outlined/warning.svg?raw";

export const icons = {
  "add-circle": addCircle,
  "arrow-back": arrowBack,
  "arrow-forward": arrowForward,
  call,
  check,
  "chevron-right": chevronRight,
  close,
  download,
  info,
  mail,
  search,
  settings,
  shield,
  warning,
} as const;

export type IconName = keyof typeof icons;
