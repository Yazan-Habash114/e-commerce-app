import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h2`
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.04em;
  margin-bottom: 60px;
  margin-top: 20px;
`;

const ArrivalsHeader = () => {
  return <SectionTitle>New Arrival</SectionTitle>;
};

export default ArrivalsHeader;
