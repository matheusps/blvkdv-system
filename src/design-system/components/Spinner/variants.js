import buildVariant from '../../style-engine/buildVariant'
import colors from '../../theme/colors'
import spacing from '../../theme/spacing'

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

export const size = buildVariant({
  name: 'size',
  variant: {
    sm: {
      width: spacing[8],
      height: spacing[8],
    },
    md: {
      width: spacing[10],
      height: spacing[10],
    },
    lg: {
      width: spacing[12],
      height: spacing[12],
    },
  },
})
