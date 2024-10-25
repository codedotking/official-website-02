import BackToUp from "./BackToUp";

export default function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="shape-one">
          <img src="assets/img/shape-one.png" alt="Footer-Shape" />
        </div>
        <div className="shape-two">
          <img src="assets/img/shape-two.png" alt="Footer-Shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-top">
                <div
                  className="section-title-center section-head mb-0 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay=".1s">
                  <span className="subtitle">Get Updates</span>
                  <h2 className="title">Signup for Newsletter</h2>
                </div>
                <div
                  className="subcription-form-wrapper wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay=".1s">
                  <form id="mc-form" className="subscribe-form" action="#">
                    <input
                      className="email"
                      type="email"
                      placeholder="Your email here"
                      name="EMAIL"
                    />
                    <button className="button">Subscribe</button>
                  </form>
                  <div className="mailchimp-alerts text-centre">
                    <div className="mailchimp-submitting"></div>
                    <div className="mailchimp-success text-green-400"></div>
                    <div className="mailchimp-error text-red-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-n30">
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-12 mb-30 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              <div className="footer-widget negative-margin">
                <div className="logo">
                  <a href="">
                    <img src="assets/img/logo.png" alt="" />
                  </a>
                </div>
                <ul className="footer-widget-list-icon">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    <span>
                      20 Bordeshi,Amin Bazar <br />
                      Savar,Dhaka 1348
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <span>hello@egens.com</span>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <span>+123 456 7890</span>
                  </li>
                </ul>
                <ul className="social-icon d-flex flex-start">
                  <li>
                    <a href="https://www.facebook.com/" className="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" className="twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" className="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" className="instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-6 col-12 mb-30 d-flex justify-content-lg-center justify-content-sm-end wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              <div className="footer-widget">
                <h5 className="footer-widget-title">Service</h5>
                <ul className="footer-widget-list">
                  <li>
                    <a href="about.html">Web Design</a>
                  </li>
                  <li>
                    <a href="about.html">Development</a>
                  </li>
                  <li>
                    <a href="about.html">Digital Marketing</a>
                  </li>
                  <li>
                    <a href="about.html">Graphic Design</a>
                  </li>
                  <li>
                    <a href="about.html">Photogaphy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-4 col-sm-5 col-12 mb-30 d-flex justify-content-lg-center justify-content-md-end wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              <div className="footer-widget">
                <h5 className="footer-widget-title">Quick Links</h5>
                <ul className="footer-widget-list">
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="contact.html">History</a>
                  </li>
                  <li>
                    <a href="contact.html">Support</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="contact.html">Refund</a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 col-sm-7 col-12 mb-30 d-flex justify-content-sm-end wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              <div className="footer-widget">
                <h5 className="footer-widget-title">Follow Us On</h5>
                <ul className="instagrm">
                  <li>
                    <a href="#">
                      <img src="assets/img/insta-one.png" alt="Insta-Image" />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/insta-two.png" alt="Insta-Image" />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/insta-three.png" alt="Insta-Image" />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/insta-four.png" alt="Insta-Image" />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/insta-five.png" alt="Insta-Image" />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/insta-six.png" alt="Insta-Image" />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="copyright wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".1s">
                <p className="order-md-1 order-2">
                  Designed with love By <a href="/">bootstrapmb</a>© 2022
                </p>
                <ul className="footer-bootm-list order-md-2 order-1">
                  <li>
                    <a href="contact.html">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="contact.html">Privecy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <BackToUp />
    </>
  );
}
