import React from "react";
import styled from "styled-components";

import { UnstableSpinner } from "./design-system";

const Title = styled.h1`
  font-size: 50px;
`;

const Container = styled.div.attrs({
  className: 'w-full h-screen bg-gray-100 p-2',
})``

export default function App() {
  return (
    <Container>
      <Title>Testing</Title>
      <UnstableSpinner variant="secondary" />
    </Container>
  );
}
