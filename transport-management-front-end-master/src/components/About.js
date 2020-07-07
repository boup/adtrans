import React from "react";
import img1 from "../assets/img/img/about-1.jpg";
import img2 from "../assets/img/img/about-2.jpg";
import img3 from "../assets/img/img/about-3.jpg";
import img4 from "../assets/img/img/about-4.jpg";
import img5 from "../assets/img/img/about-4.jpg";
function About() {
  return (
    <>
      {/* <!-- about section -->*/}
      <section id="about" class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 my-4">
              <div class="d-flex flex-wrap align-items-center justify-content-start text-uppercase">
                <h1 class="font-weight-bold mx-1 text-green">about</h1>
                <h1 class="mx-1 title-parallogram">us</h1>
              </div>
              <p class="my-4 text-muted w-75 about-text">
                We are here to help you move around the country and guide you
                through all the fabulous things the country has to offer. We are
                passionately enthusiastic about this unique and fabulous
                country. Our aim is to show you what makes Senegal such an
                exciting country, and for you to love it as much as we do. We
                want to make your stay in the country a straightforward,
                enjoyable, and rewarding experience. Dakar its capital has a lot
                to offer. It’s an Atlantic port on the Cap-Vert peninsula. Its
                traditional Médina quarter is home to the Grande Mosquée, marked
                by a towering minaret. The Musée Théodore Monod displays
                cultural artifacts including clothing, drums, carvings and
                tools. The city’s vibrant nightlife is inspired by the local
                mbalax music. Gorée a tiny, car-free island off the coast of
                Dakar. So let us do the work – sit back, relax and Enjoy
                beautiful Senegal!
              </p>
            </div>
            <div class="col-md-6 about-pictures my-4 d-none d-lg-block">
              <img
                src={img1}
                alt="menu"
                class="img-1 img-thumbnail about-image"
              />
              <img
                src={img2}
                alt="menu"
                class="img-2 img-thumbnail about-image"
              />
              <img
                src={img3}
                alt="menu"
                class="img-3 img-thumbnail about-image"
              />
              <img
                src={img4}
                alt="menu"
                class="img-4 img-thumbnail about-image"
              />
              <img
                src={img5}
                alt="menu"
                class="img-5 img-thumbnail about-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of about section -->*/}
    </>
  );
}

export default About;
