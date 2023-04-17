import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  width: 250px;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
  text-align: center;
`;

const ServiceTitle = ({ title }) => <Title>{title}</Title>;

export default ServiceTitle;
