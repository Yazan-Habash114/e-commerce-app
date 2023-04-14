import styled from "styled-components";
import ServiceIcon from "../ServiceIcon/ServiceIcon";
import ServiceDescription from "../ServiceDescription/ServiceDescription";
import ServiceTitle from "../ServiceTitle/ServiceTitle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppService = ({ title, description, serviceIcon }) => {
  return (
    <Container>
      <ServiceIcon icon={serviceIcon} />
      <ServiceTitle title={title} />
      <ServiceDescription description={description} />
    </Container>
  );
};

export default AppService;
