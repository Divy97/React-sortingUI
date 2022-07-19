import React from "react";
import styled from "styled-components";
import { Button } from "../components/header.style";

export default function Main({ data }) {
  // eslint-disable-next-line no-restricted-globals
  const width = screen.width / data.length;
  return (
    <Container>
      {data.map((size) => (
        <Bar height={`${size}px`} width={`${width}px`}>
          {data.length < 40 && <Button disabled>{size}</Button>}
        </Bar>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: flex-end;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color || "#c314cc"};
  margin-left: 2px;
  overflow-x: hidden;
`;
