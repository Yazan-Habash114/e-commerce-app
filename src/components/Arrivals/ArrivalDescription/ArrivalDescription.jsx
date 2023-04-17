import React from "react";
import styled from "styled-components";

const Description = styled.h5`
  width: 242px;
  font-weight: 400;
  font-size: 14px;
  color: #fafafa;
  margin-bottom: 16px;
`;

const ArrivalDescription = ({ description }) => {
  return <Description>{description}</Description>;
};

export default ArrivalDescription;
