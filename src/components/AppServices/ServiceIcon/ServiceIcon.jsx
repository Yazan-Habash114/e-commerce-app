import styled from "styled-components";
import {
  createTheme,
  ThemeProvider,
  styled as styling,
} from "@mui/material/styles";

const Container = styled.div`
  background-color: black;
  border: 11px solid #bab9bb;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

const ServiceIcon = ({ icon }) => {
  const CustomIcon = styling(icon)(({ theme }) => ({
    color: theme.status.primary,
  }));

  const theme = createTheme({
    status: {
      primary: "white",
    },
  });

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <CustomIcon />
      </ThemeProvider>
    </Container>
  );
};

export default ServiceIcon;
