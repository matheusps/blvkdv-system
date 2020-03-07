import buildVariant from "../../style-engine/buildVariant";

export const variant = buildVariant({ name: "variant", variant: {
  primary: {
    stroke: "red"
  },
  secondary: {
    stroke: "blue"
  }
} });
