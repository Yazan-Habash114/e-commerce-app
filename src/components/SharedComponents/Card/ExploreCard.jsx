import { Card, Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Icon from "../Icons";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CardContent from "@mui/material/CardContent";
import Ratings from "../Ratings";
import Container from "@mui/material/Container";
import Description from "../Description";
import Price from "../Price";
import { createTheme } from "@mui/material";
import { Link } from "react-router-dom";

const theme = createTheme({
  CardTheme: {
    boxShadow: "none",
    width: 270,
    position: "relative",
    height: 350,
  },
  ContainerTheme: {
    width: 270,
    height: 250,
    backgroundColor: "#F5F5F5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  DiscountBoxTheme: {
    width: 55,
    height: 26,
    backgroundColor: "#00FF66",
    borderRadius: 1,
    top: 10,
    left: 11,
    fontSize: 12,
    position: "absolute",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    color: "#FFFFFF",
    fontFamily: "Poppins",
    fontWeight: 500,
  },
  IconsBoxTheme: {
    display: "inline-block",
    position: "absolute",
    left: 220,
    top: 12,
  },
  IconBackgroundColor: {
    backgroundColor: "#FFFFFF",
  },
  ImageTheme: {
    height: 170,
    width: 150,
    alignItems: "center",
    display: "flex",
  },
  CardContent: {
    padding: "16px 0 0 0",
  },
});

const ExploreCard = (props) => {
  const { image, title, rating, price, discount, display, id } = props;
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to={`/products/${id}`}>
        <Card sx={theme.CardTheme}>
          {/* Container Contains Discount, Icons, Image of the Product */}
          <Container sx={theme.ContainerTheme}>
            {/* Discount Box */}
            {display && <Box sx={theme.DiscountBoxTheme}>{discount}</Box>}
            {/* Icons Box */}
            <Box sx={theme.IconsBoxTheme}>
              <Box sx={{ marginY: 0.5 }}>
                <Avatar sx={theme.IconBackgroundColor}>
                  {
                    <Icon
                      icon={<FavoriteBorderIcon style={{ color: "black" }} />}
                    />
                  }
                </Avatar>
              </Box>
              <Box>
                <Avatar sx={theme.IconBackgroundColor}>
                  {
                    <Icon
                      icon={
                        <VisibilityOutlinedIcon style={{ color: "black" }} />
                      }
                    />
                  }
                </Avatar>
              </Box>
            </Box>
            {/* CardMedia Contains the Image of the Product */}
            <CardMedia
              component="img"
              sx={theme.ImageTheme}
              image={image}
              title="green iguana"
            />
          </Container>
          {/* CardContent Contains The Card Description: Description, Price, Rating */}
          <CardContent sx={theme.CardContent}>
            <Description description={title} />
            <Box sx={{ display: "flex" }}>
              <Price
                display={false}
                priceBeforeDiscount={price}
                priceAfterDiscount={price}
              />
              <Ratings rating={rating} />
            </Box>
          </CardContent>
        </Card>
        <br />
      </Link>
    </div>
  );
};

export default ExploreCard;
