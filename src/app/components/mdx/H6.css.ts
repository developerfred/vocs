import { style } from '@vanilla-extract/css'
import { fontSizeVars, fontWeightVars, lineHeightVars, spaceVars } from '../../styles/vars.css.js'
import { root as H5 } from './H5.css.js'

export const root = style({
  fontSize: fontSizeVars.h6,
  fontWeight: fontWeightVars.semibold,
  lineHeight: lineHeightVars.heading,
  selectors: {
    '&:not(:first-child)': {
      marginTop: spaceVars['16'],
      paddingTop: spaceVars['16'],
    },
    '&:not(:last-child)': {
      marginBottom: spaceVars['16'],
    },
    [`${H5}+&`]: {
      paddingTop: spaceVars['0'],
    },
  },
})
