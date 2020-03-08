import styled from 'styled-components'
import tw from 'tailwind.macro'

export const GlobalStyle = styled.div.attrs({
  className: 'w-full h-screen p-2',
})`
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
