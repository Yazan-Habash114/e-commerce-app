import styled from "styled-components";
import WomenCollections from "../../../assets/new-arrivals/women-collections.png";
import ArrivalTitle from "../ArrivalTitle/ArrivalTitle";
import ArrivalDescription from "../ArrivalDescription/ArrivalDescription";
import ShopNow from "../ShopNow/ShopNow";

const Container = styled.div`
  width: 570px;
  height: 284px;
  background-color: #0d0d0d;
  border-radius: 4px;
  background-image: url(${WomenCollections});
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
`;

const SubArrival = () => {
  return (
    <Container>
      <ArrivalTitle title={"Women’s Collections"} />
      <ArrivalDescription
        description={"Featured woman collections that give you another vibe."}
      />
      <ShopNow>Shop Now</ShopNow>
    </Container>
  );
};

export default SubArrival;
