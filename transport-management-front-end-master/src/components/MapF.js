import React from "react";
function MapF() {
  return (
    <section className=" map py-5">
      <div className="container">
        <div className="row">
          <div className="col text-center mb-3">
            <div className="d-flex flex-wrap text-uppercase justify-content-center">
              <h1 className="font-weight-bold align-self-center mx-1 text-green">
                map of
              </h1>
              <h1 className="title-parallogram mx-1">senegal</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 my-3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1977931.034440509!2d-15.638115763199181!3d14.476272859136234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0x5a46a55099615940!2sSenegal!5e0!3m2!1sen!2spl!4v1593002034219!5m2!1sen!2spl"
                width="600"
                height="450"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapF;
