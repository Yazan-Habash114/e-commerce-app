import { Box } from "@mui/material";
import SideList from "../SideList";
import Divider from "@mui/material/Divider";

const DrawerSide = () => {
  return (
    <>
      <Box sx={{ mt: "120px", width: "25%" }}>
        <SideList />
      </Box>
      <Divider
        orientation="vertical"
        sx={{ color: "red", height: "500px", width: "1px" }}
      />
    </>
  );
};

export default DrawerSide;
