import ITheme from '.';
import { ThemeColors } from './colors/colors';
import { Font } from './fonts/fonts';
import { ThemeShadows } from './globalStyles/boxShadows';

export const theme: ITheme = {
  font: Font,
  purple: ThemeColors.purple,
  white: ThemeColors.white,
  offWhite: ThemeColors.offWhite,
  inactiveGrey: ThemeColors.inactiveGrey,
  medGrey: ThemeColors.medGrey,
  pipeGrey: ThemeColors.pipeGrey,
  boxShadowVerticleNav: ThemeShadows.vertNav,
  boxShadowHorizontalNav: ThemeShadows.horzNav,
  boxShadowCard: ThemeShadows.card
};
