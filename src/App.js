import React from 'react'

import { UnstableSpinner } from './design-system/components/UnstableSpinner'
import { GlobalStyle } from './design-system/components/GlobalStyle'

export default function App() {
  return (
    <GlobalStyle>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <UnstableSpinner variant='primary' />
      <UnstableSpinner variant='secondary' />
    </GlobalStyle>
  )
}
