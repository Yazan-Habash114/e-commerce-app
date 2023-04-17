import styled from "styled-components";
import AppService from "./AppService/AppService";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const Container = styled.section`
  padding: 140px 0;
  display: flex;
  justify-content: space-around;
`;

const AppServices = () => {
  return (
    <Container>
      <AppService
        title={"FREE AND FAST DELIVERY"}
        description={"Free delivery for all orders over $140"}
        serviceIcon={LocalShippingOutlinedIcon}
      />
      <AppService
        title={"24/7 CUSTOMER SERVICE"}
        description={"Friendly 24/7 customer support"}
        serviceIcon={HeadsetMicIcon}
      />
      <AppService
        title={"MONEY BACK GUARANTEE"}
        description={"We return money within 30 days"}
        serviceIcon={VerifiedUserOutlinedIcon}
      />
    </Container>
  );
};

export default AppServices;
