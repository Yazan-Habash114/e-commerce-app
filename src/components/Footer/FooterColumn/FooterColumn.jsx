import styled from "styled-components";

const Container = styled.div``;

const ColumnTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  color: #fafafa;
  margin-bottom: 24px;
  margin-top: 80px;
`;

const FooterColumn = ({ columnTitle, children }) => {
  return (
    <Container>
      <ColumnTitle>{columnTitle}</ColumnTitle>
      {children}
    </Container>
  );
};

export default FooterColumn;
