import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import { UnstableSpinner } from "./design-system";

const Title = styled.h1`
  font-size: 50px;
`;

const Container = styled.div.attrs({
  className: "w-full h-screen bg-gray-100 p-2"
})`
  & h2 {
    ${tw`p-5`}
  }
`;

export default function App() {
  return (
    <Container>
      <Title>Testing</Title>
      <h2>TW</h2>
      <UnstableSpinner variant="secondary" />
    </Container>
  );
}
