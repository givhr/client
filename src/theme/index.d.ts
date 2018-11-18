import { IBoxShadows } from './globalStyles';
import { IColors } from './colors';
import { IButton } from '../components/Button/types';

import { PrimaryFont } from './fonts';

export default interface ITheme extends IColors, IBoxShadows {
  font: PrimaryFont;
}
