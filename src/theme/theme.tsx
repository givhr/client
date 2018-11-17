import ITheme from '.';
import { ThemeColors } from './colors/colors';
import { Font } from './fonts/fonts';
import { ThemeShadows } from './globalStyles/boxShadows';

export const theme: ITheme = {
  font: Font,
  primary1: ThemeColors.primary1,
  primary2: ThemeColors.primary2,
  primary3: ThemeColors.primary3,
  primary4: ThemeColors.primary4,
  primary5: ThemeColors.primary5,
  primary6: ThemeColors.primary6,
  primary7: ThemeColors.primary7,
  primary8: ThemeColors.primary8,
  primary9: ThemeColors.primary9,
  primary10: ThemeColors.primary10,
  primary11: ThemeColors.primary11,
  primary12: ThemeColors.primary12,
  primary13: ThemeColors.primary13,
  primary14: ThemeColors.primary14,
  primary15: ThemeColors.primary15,
  primary16: ThemeColors.primary16,
  primary17: ThemeColors.primary17,
  boxShadowVerticalNav: ThemeShadows.vertNav,
  boxShadowHorizontalNav: ThemeShadows.horzNav,
  boxShadowCard: ThemeShadows.card
};
