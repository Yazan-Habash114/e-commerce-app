import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";
import { IconButton } from "@mui/material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 243,
        height: 38,
        backgroundColor: "#F5F5F5",
        boxShadow: "none",
        borderRadius: "4px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What are you looking for?"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon sx={{ color: "black" }} />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
