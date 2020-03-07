export default function buildToken(draft) {
  const { propName, values } = draft
  const props = Object.keys(propName)

  const styledFunctions = props.map(prop => {
    const name = propName[prop]

    const styledFunction = (name, values) => receivedProps => ({
      [prop]: values[receivedProps[name]],
    })

    return styledFunction(name, values)
  })

  return styledFunctions
}
