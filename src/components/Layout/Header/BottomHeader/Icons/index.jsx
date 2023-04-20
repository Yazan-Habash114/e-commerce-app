import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "@mui/material";

const Icons = () => {
  return (
    <>
      <IconButton>
        <FavoriteBorderIcon sx={{ color: "black", ml: "25px" }} />
      </IconButton>
      <IconButton>
        <ShoppingCartOutlinedIcon sx={{ color: "black" }} />
      </IconButton>
    </>
  );
};

export default Icons;
