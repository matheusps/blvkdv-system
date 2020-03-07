export default function buildVariant(draft) {
  const { variant, name } = draft

  const styledFunction = (name, values) => receivedProps => {
    const passedVariation = receivedProps[name]
    const props = values[passedVariation]
    return props
  }

  return styledFunction(name, variant)
}
