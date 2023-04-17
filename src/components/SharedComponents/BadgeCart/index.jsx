import React from "react";
import Badge from "@mui/material/Badge";

const BadgeCart = ({ icon, noOfItems }) => {
  return (
    <>
      <Badge badgeContent={noOfItems} color="secondary">
        {icon}
      </Badge>
    </>
  );
};

export default BadgeCart;
