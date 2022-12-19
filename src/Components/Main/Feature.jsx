import React from "react";
import styled from "styled-components";

const FeatureWrapper = styled.div`
  min-height: 300px;
  background-color: #585555;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  > * {
    margin: 0;
  }
`;

const HeadTag = styled.div`
  font-size: 3rem;
  font-weight: bolder;
  font-style: italic;
`;

const Feature = () => {
  return (
    <FeatureWrapper>
      <HeadTag>Shop in Style</HeadTag>
      <p>with this shop homepage template</p>
    </FeatureWrapper>
  );
};

export default Feature;
