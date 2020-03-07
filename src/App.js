import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { UnstableSpinner } from './design-system'

const Container = styled.div.attrs({
  className: 'w-full h-screen p-2 bg-base text-on-base',
})`
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    ${tw`text-on-base`}
  }
  & h1 {
    ${tw`text-6xl`}
  }
  & h2 {
    ${tw`text-5xl`}
  }
  & h3 {
    ${tw`text-4xl`}
  }
  & h4 {
    ${tw`text-3xl`}
  }
  & h5 {
    ${tw`text-2xl`}
  }
  & h6 {
    ${tw`text-xl`}
  }
  & p {
    ${tw`text-base`}
  }
`

export default function App() {
  return (
    <Container>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <UnstableSpinner variant='primary' />
      <UnstableSpinner variant='secondary' />
    </Container>
  )
}
