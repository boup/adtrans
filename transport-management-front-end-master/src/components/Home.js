import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/video/cover_video.mp4";
function Home() {
  return (
    <>
      <div>
        {/*<!-- header -->*/}
        <header className="header" id="home">
          <section id="video-motion">
            <div className="video-background">
              <div className="video-wrap">
                <div id="video">
                  <video id="video-item" autoplay muted loop playsinline>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </section>

          {/*<!-- text on video -->*/}
          <section id="text-on-video">
            <div className="text text-uppercase text-center font-weight-bold">
              <h1>Welcome to city adviser</h1>
              <h5>were we help you move around the city</h5>
              <a>
                <button
                  type="button"
                  className="btn btn_green btn-lg text-uppercase mr-2"
                >
                  <Link to="/insidecity">Inside City</Link>
                </button>
              </a>
              <a>
                <button
                  type="button"
                  className="btn btn_green btn-lg text-uppercase"
                >
                  <Link to="/betweencity">Between City</Link>
                </button>
              </a>
            </div>
          </section>
        </header>
        {/*<!-- end of header -->*/}
      </div>
    </>
  );
}

export default Home;
