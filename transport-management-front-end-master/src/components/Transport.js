import React from "react";
import img1 from "../assets/img/img/train-express.jpg";
import img2 from "../assets/img/img/bus_2.jpg";
import img3 from "../assets/img/img/taxi.png";
import tick1 from "../assets/img/img/tick1.jpg";
import tick2 from "../assets/img/img/tick2.jpg";
import tick3 from "../assets/img/img/tick3.jpg";
function Transport() {
  return (
    <div>
      {/*<!-- transport section -->*/}
      <section className="transport py-5" id="transport">
        <div className="container">
          {/*<!-- section title -->*/}
          <div className="row mb-5">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center">
              <div className="d-flex flex-wrap text-uppercase justify-content-center">
                <h1 className="font-weight-bold align-self-center mx-1 title-parallogram">
                  means of
                </h1>
                <h1 className="text-green mx-1 align-self-center">transport</h1>
              </div>
            </div>
          </div>
          {/*<!-- end of section title -->
       <!-- cars -->*/}
          <div className="row">
            {/*<!-- single car -->*/}
            <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
              <div className="card car-card">
                <img src={img1} className="card-img-top car-img" alt="" />
                {/* <!-- card body -->*/}
                <div className="card-body">
                  <div className="car-info d-flex justify-content-between">
                    {/*<!-- first flex child-->*/}
                    <div className="car-text text-uppercase">
                      <h6 className="font-weight-bold">train</h6>
                    </div>
                  </div>
                </div>
                {/* <!-- end of card body -->*/}
                <div className="card-footer text-capitalize">
                  <h5>the fast for intercity</h5>
                </div>
              </div>
            </div>
            {/*<!-- end of single car -->
          <!-- single car -->*/}
            <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
              <div className="card car-card">
                <img src={img2} className="card-img-top car-img" alt="bus" />
                {/*<!-- card body -->*/}
                <div className="card-body">
                  <div className="car-info d-flex justify-content-between">
                    {/* <!-- first flex child-->*/}
                    <div className="car-text text-uppercase">
                      <h6 className="font-weight-bold">bus</h6>
                    </div>
                  </div>
                </div>
                {/* <!-- end of card body -->*/}
                <div className="card-footer text-capitalize">
                  <p>good for long site seeing</p>
                </div>
              </div>
            </div>
            {/*<!-- end of single car -->*/}
            {/*<!-- single car -->*/}
            <div className="col-10 mx-auto my-3 col-md-6 col-lg-4">
              <div className="card car-card">
                <img src={img3} className="card-img-top car-img" alt="taxi" />
                {/* <!-- card body -->*/}
                <div className="card-body">
                  <div className="car-info d-flex justify-content-between">
                    {/* <!-- first flex child-->*/}
                    <div className="car-text text-uppercase">
                      <h6 className="font-weight-bold">car maker</h6>
                    </div>
                  </div>
                </div>
                {/*<!-- end of card body -->*/}
                <div className="card-footer text-capitalize">
                  <p>the most convenient for moving around</p>
                </div>
              </div>
            </div>
            {/*</div><!-- end of single car -->*/}
          </div>
        </div>
      </section>
      {/*<!-- end of transport section -->*/}
      {/*<!-- ticket section -->*/}
      <section>
        <div className="container ticket py-5 mb-5" id="ticket">
          {/*<!-- section title -->*/}
          <div className="row mb-5">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center">
              <div className="d-flex flex-wrap text-uppercase justify-content-center">
                <h1 className="font-weight-bold align-self-center mx-1 title-parallogram">
                  tickets
                </h1>
                <h1 className="mx-1 align-self-center text-green">available</h1>
              </div>
            </div>
          </div>
          {/* <!-- end of section title -->*/}
          <div className="row">
            {/*<!-- ticket carousel -->*/}
            <div className="col-6 col-md-6 col-lg-4 mx-auto">
              <div
                id="ticketCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  {/* <!-- single item -->*/}
                  <div className="carousel-item active">
                    <img src={tick1} className="d-block w-100" alt="ticket 1" />
                  </div>
                  {/*</div> <!-- end of single item-->

               <!-- single item -->*/}
                  <div className="carousel-item">
                    <img src={tick2} className="d-block w-100" alt="ticket 2" />
                  </div>
                  {/*<!-- end of single item-->

               <!-- single item -->*/}
                  <div className="carousel-item">
                    <img src={tick3} className="d-block w-100" alt="ticket 3" />
                  </div>
                  {/*  <!-- end of single item-->*/}
                </div>
                <a
                  href="#ticketCarousel"
                  className="carousel-control-prev"
                  role="button"
                  data-slide="prev"
                >
                  <i className="fas fa-arrow-left"></i>
                </a>
                <a
                  href="#ticketCarousel"
                  className="carousel-control-next"
                  role="button"
                  data-slide="next"
                >
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*</div> <!-- end of ticket section -->*/}
    </div>
  );
}

export default Transport;
