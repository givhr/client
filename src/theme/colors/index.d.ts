import { ThemeColors } from './colors';

export type Colors =
  | ThemeColors.purple
  | ThemeColors.white
  | ThemeColors.offWhite
  | ThemeColors.medGrey
  | ThemeColors.inactiveGrey
  | ThemeColors.pipeGrey;

export interface IColors {
  purple: ThemeColors.purple;
  offWhite?: ThemeColors.offWhite;
  white?: ThemeColors.white;
  inactiveGrey?: ThemeColors.inactiveGrey;
  medGrey?: ThemeColors.medGrey;
  pipeGrey?: ThemeColors.pipeGrey;
}
