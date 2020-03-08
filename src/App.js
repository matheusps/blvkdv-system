import React from 'react'

import { Spinner } from './design-system/components/Spinner'
import { GlobalStyle } from './design-system/components/GlobalStyle'
import decorateComponent from './design-system/style-engine/decorateComponent'
import styled from 'styled-components'

const LSAHeading = styled.h1`
  color: red;
`

LSAHeading.allowedTokens = ['text']

const Heading = decorateComponent(LSAHeading, ['text'])

const LSABox = styled.div``

LSABox.allowedTokens = ['text', 'spacing', 'theme']

const Box = decorateComponent(LSABox, ['spacing', 'theme'])

export default function App() {
  return (
    <GlobalStyle>
      <LSAHeading>Limited Surface API</LSAHeading>
      <Heading as='h3' td='strike' tt='upper'>
        limited styled
      </Heading>
      <div className='pl-96'>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
      </div>
      <Box p={5} theme='base'>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </Box>
      <Box p={5} theme='primary'>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </Box>
      <Box p={5} theme='secondary'>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      </Box>
      <Box pl='96'>
        <Spinner variant='primary' />
        <Spinner variant='secondary' />
      </Box>
    </GlobalStyle>
  )
}
