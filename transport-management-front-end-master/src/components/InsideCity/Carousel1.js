import React from "react";

import tick1 from "../../assets/img/tick1.jpg";
import tick2 from "../../assets/img/tick2.jpg";
import tick3 from "../../assets/img/tick3.jpg";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" narrow="false">
            <MDBView>
              <img
                className="d-block w-100"
                src={tick1}
                alt="First slide"
                style={{ width: "100%" }}
              />
              <p>1 Section</p>

              <p>Price: XOF150</p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={tick2}
                alt="Second slide"
                style={{ width: "100%" }}
              />
              <p>2 Sections</p>
              <p>Price: XOF175</p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={tick3}
                alt="Third slide"
                style={{ width: "100%" }}
              />
              <p>Sous Section</p>
              <p>Price: XOF100</p>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default CarouselPage;
