import { style } from '@vanilla-extract/css'
import {
  borderRadiusVars,
  fontSizeVars,
  fontWeightVars,
  primitiveColorVars,
  semanticColorVars,
  spaceVars,
  viewportVars,
} from '../../styles/vars.css.js'

export const root = style({
  alignItems: 'center',
  backgroundColor: semanticColorVars.codeBlockBackground,
  borderTopLeftRadius: borderRadiusVars['4'],
  borderTopRightRadius: borderRadiusVars['4'],
  borderBottom: `1px solid ${primitiveColorVars.border}`,
  color: primitiveColorVars.text3,
  display: 'flex',
  fontSize: fontSizeVars['14'],
  fontWeight: fontWeightVars.medium,
  gap: spaceVars['6'],
  padding: `${spaceVars['8']} ${spaceVars['24']}`,
  '@media': {
    [viewportVars['max-720px']]: {
      borderRadius: 0,
      marginLeft: `calc(-1 * ${spaceVars['16']})`,
      marginRight: `calc(-1 * ${spaceVars['16']})`,
      paddingLeft: spaceVars['16'],
      paddingRight: spaceVars['16'],
    },
  },
})