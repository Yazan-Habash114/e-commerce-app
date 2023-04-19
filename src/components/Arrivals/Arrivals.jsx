import styled from "styled-components";
import ArrivalsHeader from "./ArrivalsHeader/ArrivalsHeader";
import MainArrival from "./MainArrival/MainArrival";
import SubArrival from "./SubArrival/SubArrival";
import NormalArrival from "./NormalArrival/NormalArrival";

const Container = styled.section`
  width: 1170px;
  margin: 0 135px;
`;

const Content = styled.div`
  display: flex;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Left = styled.div``;

const Top = styled.div``;

const Bottom = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Arrivals = () => {
  return (
    <Container>
      <ArrivalsHeader />
      <Content>
        <Left>
          <MainArrival />
        </Left>
        <Right>
          <Top>
            <SubArrival />
          </Top>
          <Bottom>
            <NormalArrival
              obj={{
                title: "Speakers",
                description: "Amazon wireless speakers",
                image: "speakers.png",
              }}
            />
            <NormalArrival
              obj={{
                title: "Perfume",
                description: "GUCCI INTENSE OUD EDP",
                image: "perfume.png",
              }}
            />
          </Bottom>
        </Right>
      </Content>
    </Container>
  );
};

export default Arrivals;
