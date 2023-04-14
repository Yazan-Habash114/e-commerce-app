import styled from "styled-components";
import Playstation5 from "../../../assets/new-arrivals/playstation5.png";
import ArrivalTitle from "../ArrivalTitle/ArrivalTitle";
import ArrivalDescription from "../ArrivalDescription/ArrivalDescription";
import ShopNow from "../ShopNow/ShopNow";

const Container = styled.div`
  width: 570px;
  height: 600px;
  background-color: black;
  border-radius: 4px;
  background-image: url(${Playstation5});
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  margin-right: 30px;
`;

const MainArrival = () => {
  return (
    <Container>
      <ArrivalTitle title={"PlayStation 5"} />
      <ArrivalDescription
        description={"Black and White version of the PS5 coming out on sale."}
      />
      <ShopNow>Shop Now</ShopNow>
    </Container>
  );
};

export default MainArrival;
