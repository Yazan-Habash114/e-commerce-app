import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

const Container = styled.div`
  border: 1px solid white;
  width: 220px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;

const Input = styled.input`
  border-radius: 10px;
  background-color: black;
  padding: 12px;
  color: white;
  outline: none;
  border: none;
`;

const TextField = () => {
  return (
    <Container>
      <Input placeholder="Enter your email" />
      <SendIcon sx={{ color: "white", cursor: "pointer" }} />
    </Container>
  );
};

export default TextField;
