import styled from "styled-components";

const Title = styled.h5`
  color: #fafafa;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 16px;
`;

const ArrivalTitle = ({ title }) => <Title>{title}</Title>;

export default ArrivalTitle;
