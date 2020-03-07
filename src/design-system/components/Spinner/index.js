import React from 'react'
import styled from 'styled-components'
import { fullSpin } from './keyframes'
import { variant, size } from './variants'

const Svg = styled.svg`
  transition-property: transform;
  animation-name: ${fullSpin};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  ${variant}
  ${size}
`

export function Spinner({ size, variant }) {
  return (
    <Svg
      variant={variant}
      size={size}
      style={{ animationDuration: '500ms' }}
      role='img'
      viewBox='0 0 32 32'
    >
      <circle
        role='presentation'
        cx={16}
        cy={16}
        r={12}
        fill='none'
        strokeWidth={4}
        strokeDasharray={Math.PI * 8}
        strokeLinecap='round'
      />
    </Svg>
  )
}

Spinner.defaultProps = {
  size: 'md',
  variant: 'primary',
}
