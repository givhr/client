import * as styledComponents from "styled-components";
import { IBreakPointBuilder, breakpointBuilder } from "./themeHelpers";

export interface IColor {
  black: string;
  white: string;
  blackGrey: string;
  gray: string;
  darkGray: string;
  lightGray: string;
  green: string;
  red: string;
  pink: string;
  gold: string;
  burntGold: string;
  yellow: string;
  offWhite: string;
  [key: string]: string;
}

export interface IBreakPoint {
  xs: IBreakPointBuilder;
  sm: IBreakPointBuilder;
  md: IBreakPointBuilder;
  lg: IBreakPointBuilder;
  xl: IBreakPointBuilder;
  xxl: IBreakPointBuilder;
  [key: string]: IBreakPointBuilder;
}
interface IMediaQuery {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  [key: string]: string;
}

export interface ITheme {
  fonts: string[];
  boxShadows: string[];
  space: number[];
  colors: IColor;
  fontSizes: number[];
  breakpoints: string[];
  breakpointMap: IBreakPoint;
  mediaQueries: IMediaQuery;
  borders: any;
}

const space = [0, 4, 8, 16, 32, 64, 128, 256];

const getMaxWidth = (em: number): number => em - 0.01;

const fonts = [
  `'ClanOT-Book',Helvetica,Arial`,
  `'ClanOT-BookItalic',Helvetica,Arial`,
  `'ClanOT-News',Helvetica,Arial`,
  `'ClanOT-NewsItalic',Helvetica,Arial`,
  `'ClanOT-Medium',Helvetica,Arial`,
  `'ClanOT-MediumItalic',Helvetica,Arial`,
  `'ClanOT-Thin',Helvetica,Arial`,
  `'ClanOT-ThinItalic',Helvetica,Arial`,
  `'ClanOT-Bold',Helvetica,Arial`
];

// fontSizes
export const fontSizes = [10, 12, 14, 16, 18, 20, 24, 32, 48];

// boxShadows
export const boxShadows = [
  `0 2px 4px 0 rgba(0, 0, 0, 0.5)`,
  `0 0 5px 0 rgba(244, 189, 24, 0.5);`
];

// color palette
const colors = {
  black: "#000",
  white: "#fff",
  blackGrey: "#232323",
  gray: "#6d6d6d",
  darkGray: "#424242",
  lightGray: "#b2b2b2",
  green: "#4aac10",
  red: "#ca0008",
  pink: "#f4ccce",
  gold: "#f4bd18",
  burntGold: "#ca8a2a",
  yellow: "#efd72f",
  offWhite: "#ebebeb"
};

// borders
export const borders = {
  dropdownOption: `1px solid ${colors.gray}`,
  input: `1px solid ${colors.lightGray}`,
  step: `2px solid ${colors.darkGray}`,
  error: `2px solid ${colors.red}`
};

// breakpoints
export const breakpointsArr = [32, 40, 48, 65, 90];
// breakpoints as em strings
export const breakpoints = breakpointsArr.map(item => `${item}em`);

// define breakpoints by device
export const breakpointMap: IBreakPoint = {
  xs: breakpointBuilder("mobile", 0, breakpointsArr[0]),
  sm: breakpointBuilder("mobile", breakpointsArr[0], breakpointsArr[1]),
  md: breakpointBuilder("tablet", breakpointsArr[1], breakpointsArr[2]),
  lg: breakpointBuilder("tablet", breakpointsArr[2], breakpointsArr[3]),
  xl: breakpointBuilder("desktop", breakpointsArr[3], breakpointsArr[4]),
  xxl: breakpointBuilder("xldesktop", breakpointsArr[4], 99999)
};

// generate a mediaquery string for each breakpoint
const createMediaQuery = () => {
  const mediaQuery: IMediaQuery = {
    xs: `@media (max-width: ${getMaxWidth(breakpointMap.xs.maxWidthInEms)}em)`,
    sm: `@media (min-width: ${
      breakpointMap.sm.minWidthInEms
    }em) and (max-width: ${getMaxWidth(breakpointMap.sm.maxWidthInEms)}em)`,
    md: `@media (min-width: ${
      breakpointMap.md.minWidthInEms
    }em) and (max-width: ${getMaxWidth(breakpointMap.md.maxWidthInEms)}em)`,
    lg: `@media (min-width: ${
      breakpointMap.lg.minWidthInEms
    }em) and (max-width: ${getMaxWidth(breakpointMap.lg.maxWidthInEms)}em)`,
    xl: `@media (min-width: ${
      breakpointMap.xl.minWidthInEms
    }em) and (max-width: ${getMaxWidth(breakpointMap.xl.maxWidthInEms)}em)`,
    xxl: `@media (min-width: ${breakpointMap.xxl.minWidthInEms}em)`
  };
  return mediaQuery;
};

// generate mediqueries styled based on previous mediaqueries
const createIMediaQuery = () => {
  return Object.keys(mediaQueries).map((key, index) => {
    return (args: string) => `
    ${mediaQueries[key]} {
      ${args};
    }`;
  });
};

export const mediaQueries = createMediaQuery();
export const mediaQueriesInterface = createIMediaQuery();

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export const theme: ITheme = {
  fonts,
  space,
  colors,
  boxShadows,
  fontSizes,
  breakpoints,
  breakpointMap,
  mediaQueries,
  borders
};

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${colors.blackGrey};
    line-height: 1.5;
    margin: 0;
    font-family: ${fonts[0]};
  }
`;

export { css, injectGlobal, keyframes, ThemeProvider, styled };
