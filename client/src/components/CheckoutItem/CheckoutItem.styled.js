import styled from "styled-components";

export const CheckoutItemStyled = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    padding: 8px 0;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  img {
    width: 120px;
    height: 150px;
  }

  @media screen and (max-width: 800px) {
    width: 120px;
    height: 150px;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    ${"" /* width: 18%; */}
    padding: 10px;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    margin: 0 5px;
    width: 15%;
    span {
      margin: 0 0px;
    }
  }
`;

export const RemoveButtonStyled = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
