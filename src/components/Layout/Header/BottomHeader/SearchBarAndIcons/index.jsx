import React from "react";
import SearchBar from "../SearchBar";
import Icons from "../Icons";
import { Box } from "@mui/material";

function SearchBarAndIcons() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: "40px" }}>
      <SearchBar />
      <Icons />
    </Box>
  );
}

export default SearchBarAndIcons;
