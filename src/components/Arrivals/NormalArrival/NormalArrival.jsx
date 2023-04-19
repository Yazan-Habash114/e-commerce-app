import styled from "styled-components";
import ArrivalTitle from "../ArrivalTitle/ArrivalTitle";
import ArrivalDescription from "../ArrivalDescription/ArrivalDescription";
import ShopNow from "../ShopNow/ShopNow";

const Container = styled.div`
  width: 270px;
  height: 284px;
  background-color: #0d0d0d;
  border-radius: 4px;
  background-image: ${(props) =>
    `url(${require(`../../../assets/new-arrivals/${props.backgroundImg}`)})`};
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;

  &:first-child {
    margin-right: 30px;
  }
`;

const NormalArrival = ({ obj }) => {
  return (
    <Container backgroundImg={obj.image}>
      <ArrivalTitle title={obj.title} />
      <ArrivalDescription description={obj.description} />
      <ShopNow>Shop Now</ShopNow>
    </Container>
  );
};

export default NormalArrival;
