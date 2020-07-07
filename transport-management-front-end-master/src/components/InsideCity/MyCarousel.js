import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img.jpg";
import img3 from "../../assets/img/img2.jpg";
import img4 from "../../assets/img/img3.jpg";
function MyCarousel(props) {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel autoPlay="true" resetAutoPlay="true" infiniteLoop="true">
      <div>
        <img src={img4} style={{ height: "300px", width: "300px" }} />
      </div>
      <div>
        <img src={img3} style={{ height: "300px", width: "300px" }} />
      </div>
      <div>
        <img src={img2} style={{ height: "300px", width: "300px" }} />
      </div>
      <div>
        <img src={img1} style={{ height: "300px", width: "300px" }} />
      </div>
    </Carousel>
  );
}

export default MyCarousel;
