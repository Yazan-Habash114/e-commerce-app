import { Container, Box } from "@mui/material";
import { mockData } from "../../../data";
import TitleTag from "../../SharedComponents/TitleTag/index";
import SubTitle from "../../SharedComponents/SubTitle";
import ProductCard from "../../SharedComponents/Card";
import ColorButtons from "../../SharedComponents/Button";
import { createTheme } from "@mui/material/styles";

const BestSellingProduct = () => {
  const theme = createTheme({
    TitleTheme: {
      display: "flex",
      alignItems: "center",
    },
    BigTitleTheme: { display: "flex", justifyContent: "space-between" },
    SubTitleTheme: {
      paddingLeft: 1,
    },
    CardTheme: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 5,
    },
  });

  return (
    <Container>
      <Box sx={theme.TitleTheme}>
        <Box>
          <TitleTag />
        </Box>
        <Box sx={theme.SubTitleTheme}>
          <SubTitle SubTitle="This Month" />
        </Box>
      </Box>
      <Box sx={theme.BigTitleTheme}>
        <h1>Best Selling Products</h1>
        <ColorButtons type={"red"} innerText={"View All"} />
      </Box>
      <Box sx={theme.CardTheme}>
        {mockData.map(
          (item, index) =>
            index < 4 && (
              <Box key={item.id}>
                <ProductCard
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  rating={item.rating}
                  price={item.price}
                  onOff={false}
                />
              </Box>
            )
        )}
      </Box>
    </Container>
  );
};

export default BestSellingProduct;
