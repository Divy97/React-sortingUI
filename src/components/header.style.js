import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 77px;
  width: 100%;
  background-color: #000;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Button = styled.p`
  color: #fff;
  cursor: ${(props) => (props.disabled ? "cursor" : "pointer")};
  font-size: 20px;
  font-family: Arial;
`;

export const SortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RangeWrapper = styled.div`
  width: 200px;
`;
