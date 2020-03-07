import buildVariant from '../../style-engine/buildVariant'
import colors from '../../theme/colors'

export const variant = buildVariant({
  name: 'variant',
  variant: {
    primary: {
      stroke: colors.primary.default,
    },
    secondary: {
      stroke: colors.secondary.default,
    },
  },
})
