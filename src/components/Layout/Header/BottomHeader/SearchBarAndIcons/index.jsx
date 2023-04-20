import SearchBar from "../SearchBar";
import Icons from "../Icons";
import { Box } from "@mui/material";

const SearchBarAndIcons = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: "40px" }}>
      <SearchBar />
      <Icons />
    </Box>
  );
};

export default SearchBarAndIcons;
