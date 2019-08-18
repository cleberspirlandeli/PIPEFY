import React, { useState } from "react";
import { loadLists } from "./../../services/api";
import List from "./../List";
import { Container } from "./styles";

import BoardContext from './context'

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(from, to) {
    console.log(from, to)
  }

  return (
    <Container>
      {lists.map(list => (
        <List key={list.title} data={list} />
      ))}
    </Container>
  );
}
