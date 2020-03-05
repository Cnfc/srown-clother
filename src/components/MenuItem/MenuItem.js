import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from "./MenuItem.styled";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  console.log(size);
  return (
    <MenuItemContainer
      className={`${size} menu-item `}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image-container"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <ContentContainer>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};
export default withRouter(MenuItem);
