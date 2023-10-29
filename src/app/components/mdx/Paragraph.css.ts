import { style } from '@vanilla-extract/css'

import { lineHeightVars, semanticColorVars, spaceVars } from '../../styles/vars.css.js'
import { root as Blockquote } from './Blockquote.css.js'
import { root as H2 } from './H2.css.js'
import { root as H3 } from './H3.css.js'
import { root as H4 } from './H4.css.js'
import { root as H5 } from './H5.css.js'
import { root as H6 } from './H6.css.js'

export const root = style({
  lineHeight: lineHeightVars.paragraph,
  selectors: {
    [`${Blockquote}>&`]: {
      color: semanticColorVars.blockquoteText,
    },
    [`${H2}+&,${H3}+&,${H4}+&,${H5}+&,${H6}+&`]: {
      marginTop: `calc(${spaceVars['8']} * -1)`,
    },
  },
})
