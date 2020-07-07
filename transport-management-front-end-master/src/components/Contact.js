import React from "react";

function Contact() {
  return (
    <div>
      {/*<!-- contact section-->*/}
      <section className="py-5">
        <div className="container py-5" id="contact">
          {/*<!-- section title -->*/}
          <div className="row mb-5">
            <div className="col d-flex flex-wrap text-uppercase justify-content-center">
              <div className="d-flex flex-wrap text-uppercase justify-content-center">
                <h1 className="font-weight-bold align-self-center mx-1 title-parallogram">
                  contact
                </h1>
                <h1 className="text-green mx-1 align-self-center">us</h1>
              </div>
            </div>
          </div>
          {/* <!-- end of section title -->*/}
          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.9448858141513!2d16.90811591580326!3d52.407675079792966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b34c6e51b69%3A0xe8c95e035fb5a27!2sDormitory%20Jowita%20AMU!5e0!3m2!1sen!2spl!4v1593013278068!5m2!1sen!2spl"
                width="100%"
                height="315"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen
              ></iframe>
            </div>

            <div className="col-md-5">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    value=""
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name=""
                    value=""
                    placeholder="E-mail"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    name=""
                    value=""
                    placeholder="Phone"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name=""
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button className="btn btn-default" type="submit" name="button">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>{" "}
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
