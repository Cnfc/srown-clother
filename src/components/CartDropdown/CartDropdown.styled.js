import styled from "styled-components";

export const CartDropdownStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 240px;
  height: 340px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMessageStyled = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsStyled = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
