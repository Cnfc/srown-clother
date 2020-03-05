import React from "react";

import CollectionItem from "components/CollectionsItem";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from "./PreviewCollection.styled";

const PreviewCollection = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default PreviewCollection;
