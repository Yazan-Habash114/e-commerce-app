import styled from "styled-components";
import MainFooter from "../MainFooter/MainFooter";
import CopyRight from "../CopyRight/CopyRight";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
`;

const FooterContainer = () => {
  return (
    <Container>
      <MainFooter />
      <CopyRight />
    </Container>
  );
};

export default FooterContainer;
