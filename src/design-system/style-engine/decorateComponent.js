import styled from 'styled-components'
import tokenSystem from '../tokens'

export default function decorateComponent(Component, tokens) {
  const allowedTokens = tokens.filter(token =>
    Component.allowedTokens.includes(token)
  )
  const styledFunctions = allowedTokens.map(at => tokenSystem[at])
  return styled(Component)`
    ${styledFunctions}
  `
}
