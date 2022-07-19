import React from "react";
import { Wrapper, Button, RangeWrapper } from "./header.style";
import "../App.css";

import Slider from "@mui/material/Slider";

export default function Header({ randomList, handleChange, value }) {
  return (
    <>
      <Wrapper>
        <Button disabled>Sorting Visualizer</Button>
        <RangeWrapper>
          <Button
            style={{
              position: "absolute",
              left: "24%",
              top: "2%",
            }}
          >
            Size of an Array
          </Button>
          <Slider
            style={{
              position: "absolute",
              width: "13%",
            }}
            value={value}
            onChange={handleChange}
            min={5}
            max={100}
          />
        </RangeWrapper>
        <Button style={{ marginLeft: "-5%", marginTop: "1.4%" }}>
          {value}
        </Button>
        <Button onClick={randomList}>Random Size Array</Button>
        <Button onClick={() => console.log("Clicked")}>Merge</Button>
        <Button onClick={() => console.log("Clicked")}>Quick</Button>
        <Button onClick={() => console.log("Clicked")}>Bubble</Button>
        <Button onClick={() => console.log("Clicked")}>Heap</Button>
      </Wrapper>
    </>
  );
}
