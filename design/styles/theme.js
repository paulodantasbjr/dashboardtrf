import { colors } from '../system/colors'
import { breakpoints } from '../system/breakpoints'
import { weight } from '../system/weight'
import { size } from '../system/size'
import { spacing } from '../system/spacing'
import { fonts } from '../system/fonts'
import { transitions } from '../system/transitions'
import { shadow } from '../system/shadow'

export const lightTheme = {
  colors,
  breakpoints,
  weight,
  size,
  spacing,
  fonts,
  transitions,
  shadow,
  mode: {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.31)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    buttons: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
    border: {
      light: '#e6e7ea',
      main: '#dadbe0',
      dark: '#ced0d6',
    },
    background: {
      light: '#fffafa',
      main: '#fafafa',
      dark: '#dcdcdc',
      sidebar: '#eeeeee',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
  },
}

export const darkTheme = {
  colors,
  breakpoints,
  weight,
  size,
  spacing,
  fonts,
  transitions,
  shadow,
  mode: {
    text: {
      primary: '#fffafa',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    buttons: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
    },
    border: {
      light: '#b6b9c2',
      main: '#57585c',
      dark: '#3b3b3e',
    },
    shadow: {
      light: '0px 2px 1px -1px rgba(0,0,0,0.2)',
      main: '0px 7px 8px -4px rgba(0,0,0,0.2)',
      dark: '0px 11px 15px -7px rgba(0,0,0,0.2)',
    },
    background: {
      light: '#aaaaaa',
      main: '#1a1a1a',
      dark: '#1f1f1f',
      sidebar: '#202122',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
}
