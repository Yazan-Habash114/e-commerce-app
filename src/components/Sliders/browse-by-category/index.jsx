import { Container, Box, Avatar } from "@mui/material";
import { browseByCategoryData } from "../../../browseData";
import TitleTag from "../../SharedComponents/TitleTag/index";
import SubTitle from "../../SharedComponents/SubTitle";
import BrowseCard from "../../SharedComponents/SimpleCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme } from "@mui/material/styles";
import Icon from "../../SharedComponents/Icons";

const BrowseByCategory = () => {
  const theme = createTheme({
    TitleTheme: {
      display: "flex",
      alignItems: "center",
    },
    BigTitleTheme: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    SubTitleTheme: {
      paddingLeft: 1,
    },
    CardTheme: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 5,
    },
    ArrowCircleTheme: {
      backgroundColor: "#F5F5F5",
      borderRadius: "50%",
      width: 30,
      height: 30,
    },
    ButtonTheme: {
      marginTop: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    AvatarTheme: {
      width: "46px",
      height: "46px",
      fontSize: 16,
      color: "#000",
      backgroundColor: "#F5F5F5;",
      marginLeft: "5px",
    },
    BoxAvatarWrapperTheme: {
      display: "flex",
      paddingTop: 3,
    },
  });

  return (
    <Container>
      <Box sx={theme.TitleTheme}>
        <Box>
          <TitleTag />
        </Box>
        <Box sx={theme.SubTitleTheme}>
          <SubTitle SubTitle="Categories" />
        </Box>
      </Box>

      <Box sx={theme.BigTitleTheme}>
        <Box>
          <h1>Browse By Category</h1>
        </Box>

        <Box sx={theme.BoxAvatarWrapperTheme}>
          <Avatar sx={theme.AvatarTheme}>
            <Icon icon={<ArrowBackIcon />} />
          </Avatar>

          <Avatar sx={theme.AvatarTheme}>
            <Icon icon={<ArrowForwardIcon />} />
          </Avatar>
        </Box>
      </Box>

      <Box sx={theme.CardTheme}>
        {browseByCategoryData.map(
          (item, index) =>
            index < 8 && (
              <Box key={item.id}>
                <BrowseCard icon={item.icon} title={item.title} onOff={false} />
              </Box>
            )
        )}
      </Box>
    </Container>
  );
};

export default BrowseByCategory;
