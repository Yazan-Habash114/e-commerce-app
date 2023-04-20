import { Box } from "@mui/material";

import SingleItem from "../SingleItem";

const pages = ["Home", "Contact", "About", "Sign Up"];

const Items = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        width: "370px",
      }}
    >
      {pages.map((page) => (
        <SingleItem pagesName={page} />
      ))}
    </Box>
  );
};

export default Items;
