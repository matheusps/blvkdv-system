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

export const size = buildVariant({
  name: 'size',
  variant: {
    sm: {
      width: '1.5rem',
      height: '1.5rem',
    },
    md: {
      width: '2rem',
      height: '2rem',
    },
    lg: {
      width: '3rem',
      height: '3rem',
    },
  },
})
