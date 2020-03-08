import React from 'react'
import decorateComponent from '../decorateComponent'
import { render, screen, cleanup } from '@testing-library/react'
import 'jest-styled-components'

afterEach(cleanup)

describe('Components are decorated successfully', () => {
  it('should return a component', () => {
    const text = 'Testing'

    function Heading() {
      return <h1>{text}</h1>
    }

    const DecoratedComponent = decorateComponent(Heading)
    render(<DecoratedComponent />)

    expect(DecoratedComponent).not.toBeNull()
    expect(DecoratedComponent).not.toBeUndefined()
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
