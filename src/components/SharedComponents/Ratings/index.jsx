import Rating from "@mui/material/Rating";
import { Box, createTheme } from "@mui/material";

const Ratings = (props) => {
  const { rating } = props;

  const theme = createTheme({
    OuterDiv: { display: "flex" },
    CountTheme: {
      display: "flex",
      alignItems: "center",
      opacity: 0.5,
      fontFamily: "Poppins",
      fontWeight: 500,
    },
  });
  return (
    <Box sx={theme.OuterDiv}>
      <Rating name="read-only" value={rating.rate} readOnly />
      <Box sx={theme.CountTheme}>{`(${rating.count})`}</Box>
    </Box>
  );
};

export default Ratings;
