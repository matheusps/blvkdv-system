import buildToken from '../style-engine/buildToken'

const align = {
  values: {
    left: 'left',
    center: 'center',
    right: 'right',
    justify: 'justify',
  },
  propName: {
    textAlign: 'ta',
  },
}

const transform = {
  values: {
    none: 'none',
    capital: 'capitalize',
    lower: 'lowercase',
    upper: 'uppercase',
  },
  propName: {
    textTransform: 'tt',
  },
}

const decoration = {
  values: {
    none: 'none',
    underline: 'underline',
    strike: 'line-through',
  },
  propName: {
    textDecoration: 'td',
  },
}

export default [align, transform, decoration].map(buildToken)
