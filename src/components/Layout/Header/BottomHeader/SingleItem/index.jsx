import { Link } from "@mui/material";

const SingleItem = ({ pagesName }) => {
  return (
    <Link
      href="#"
      sx={{
        color: "black",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "24px",
      }}
    >
      {pagesName}
    </Link>
  );
};

export default SingleItem;
