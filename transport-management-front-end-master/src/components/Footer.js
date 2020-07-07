import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
function Footer() {
  return (
    <div>
      {/*<!--footer -->*/}
      <footer className="page-footer font-small elegant-color">
        {/*<!-- Footer Links -->*/}
        <div className="container">
          <div className="row d-flex justify-content-center">
            {/*<!--Grid column-->*/}
            <div className="col d-flex justify-content-center my-5 pt-1">
              {/*<!-- Facebook -->*/}
              <a className="fb-ic">
                <FaFacebook />
              </a>
              {/*<!-- Twitter -->*/}
              <a className="tw-ic">
                <FaTwitter />
              </a>
              {/*<!-- Google +-->*/}
              <a className="gplus-ic">
                <FaGooglePlus />
              </a>
              {/*<!--Linkedin -->*/}
              <a className="li-ic">
                <FaLinkedin />
              </a>
              {/*<!--Instagram-->*/}
              <a className="ins-ic">
                <FaInstagram />
              </a>
              {/*<!--Pinterest-->*/}
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text mx-3 mx-md-4 fa-2x">
                  {" "}
                </i>
              </a>
            </div>
            {/*<!--Grid column-->*/}
          </div>
          {/*<!--Grid row-->*/}
        </div>
        {/*<!-- Footer Links -->*/}

        {/*<!-- Copyright -->*/}
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="#" className="site">
            {" "}
            CityAdviser.com
          </a>
        </div>
        {/*<!-- Copyright -->*/}
      </footer>
      {/*<!-- Footer -->*/}
    </div>
  );
}

export default Footer;
