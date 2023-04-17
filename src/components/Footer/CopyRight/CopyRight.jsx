import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #111;
  background-color: black;
`;

const Text = styled.p`
  font-size: 16px;
  color: #fff;
  opacity: 0.7;
  margin: 16px 0;
`;

const CopyRight = () => {
  return (
    <Container>
      <Text>© Copyright Rimel 2022. All right reserved</Text>
    </Container>
  );
};

export default CopyRight;
