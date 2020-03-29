import styled from "styled-components";

export const CollectionItemStyled = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover {
    .background-image {
      opacity: 0.8;
    }
    .add-button {
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        background-color: black;
        color: white;
        opacity: 0.85;
      }
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      opacity: unset;
      .background-image {
        opacity: unset;
      }
      .add-button {
        opacity: unset;
      }
    }
  }
`;

export const ImageStyled = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterStyled = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameStyled = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceStyled = styled.span`
  width: 10%;
`;

export const AddButton = styled.div`
  width: 80%;
  position: absolute;
  opacity: 0.7;
  top: 255px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  ${"" /* padding: 25px; */}
  background-color: white;
  ${"" /* color: black; */}
  ${"" /* font-weight: bold; */}
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: flex;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;
