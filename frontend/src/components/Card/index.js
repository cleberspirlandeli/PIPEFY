import React from "react";

import { Container, Label } from "./styles";

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer a migração completo de servidor</p>
      <img
        src="https://api.adorable.io/avatars/75/abott@adorable.png"
        alt="avatar"
      />
    </Container>
  );
}
