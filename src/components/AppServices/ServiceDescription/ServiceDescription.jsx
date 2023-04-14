import styled from "styled-components";

const Container = styled.p`
  width: 249px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
`;

const ServiceDescription = ({ description }) => (
  <Container>{description}</Container>
);

export default ServiceDescription;
