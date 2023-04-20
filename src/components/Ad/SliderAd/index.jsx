import AdElements from "../AdElements";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const SliderAd = () => {
  return (
    <div className="wrapper-slider">
      <Carousel
        infiniteLoop
        showArrows={false}
        renderIndicator={(onClickHandler, isSelected, index) => {
          const dotStyle = {
            display: "inline-block",
            width: 12,
            height: 12,
            borderRadius: "50%",
            margin: "0 5px",
            backgroundColor: isSelected ? "red" : "gray",
            border: isSelected ? "2px solid white" : "none",
            cursor: "pointer",
          };
          return (
            <span
              style={{ position: "relative", textAlign: "center" }}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`slide ${index + 1}`}
            >
              <span style={dotStyle} />
            </span>
          );
        }}
      >
        <AdElements />
        <AdElements />
      </Carousel>
    </div>
  );
};

export default SliderAd;
