import buildVariant from "../buildVariant";

describe("Variants are created with success", () => {
  it("should with colors", () => {
    const draft = {
      primary: {
        backgroundColor: "blue",
        color: "green"
      },
      secondary: {
        backgroundColor: "black",
        color: "pink"
      }
    };
    const variant = buildVariant({ name: "theme", variant: draft });
    const primary = variant({ theme: "primary" });
    expect(primary).toEqual({
      backgroundColor: "blue",
      color: "green"
    });
    const secondary = variant({ theme: "secondary" });
    expect(secondary).toEqual({
      backgroundColor: "black",
      color: "pink"
    });
  });

  it("should with sizes", () => {
    const draft = {
      small: {
        padding: "1rem",
        margin: "1rem",
        borderRadius: "1rem"
      },
      medium: {
        padding: "2rem",
        margin: "2rem",
        borderRadius: "2rem"
      }
    };
    const variant = buildVariant({ name: "size", variant: draft });
    const small = variant({ size: "small" });
    expect(small).toEqual({
      padding: "1rem",
      margin: "1rem",
      borderRadius: "1rem"
    });
    const medium = variant({ size: "medium" });
    expect(medium).toEqual({
      padding: "2rem",
      margin: "2rem",
      borderRadius: "2rem"
    });
  });
});
