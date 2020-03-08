import buildVariant from '../style-engine/buildVariant'
import colors from '../theme/colors'

export default buildVariant({
  name: 'theme',
  variant: {
    base: {
      backgroundColor: colors.base.default,
      color: colors['on-base'],
    },
    primary: {
      backgroundColor: colors.primary.default,
      color: colors['on-primary'],
    },
    secondary: {
      backgroundColor: colors.secondary.default,
      color: colors['on-secondary'],
    },
  },
})
