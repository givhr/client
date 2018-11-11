import { Colors } from './colors';
import { BoxShadows } from './globalStyles';
import { IColors } from './colors';

import { PrimaryFont } from './fonts';

export interface Theme extends IColors {
  font: PrimaryFont;
}
