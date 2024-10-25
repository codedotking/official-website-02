import Image from "next/image";
import BackToUp from "./BackToUp";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="shape-one">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-one.png"
            alt="Footer-Shape"
          />
        </div>
        <div className="shape-two">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-two.png"
            alt="Footer-Shape"
          />
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
                  <Link href="/">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/logo.png"
                      alt=""
                    />
                  </Link>
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
                    <Link href="https://www.facebook.com/" className="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/" className="twitter">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/" className="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/"
                      className="instagram">
                      <i className="fab fa-instagram"></i>
                    </Link>
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
                    <Link href="about">Web Design</Link>
                  </li>
                  <li>
                    <Link href="about">Development</Link>
                  </li>
                  <li>
                    <Link href="about">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link href="about">Graphic Design</Link>
                  </li>
                  <li>
                    <Link href="about">Photogaphy</Link>
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
                    <Link href="/about">About us</Link>
                  </li>
                  <li>
                    <Link href="/contact">History</Link>
                  </li>
                  <li>
                    <Link href="/contact">Support</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/contact">Refund</Link>
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
                    <Link href="/#">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/insta-one.png"
                        alt="Insta-Image"
                      />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/insta-two.png"
                        alt="Insta-Image"
                      />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/insta-three.png"
                        alt="Insta-Image"
                      />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/insta-four.png"
                        alt="Insta-Image"
                      />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/insta-five.png"
                        alt="Insta-Image"
                      />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/insta-six.png"
                        alt="Insta-Image"
                      />
                      <div className="add-action">
                        <i className="fab fa-instagram"></i>
                      </div>
                    </Link>
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
                  Designed with love By <Link href="/">bootstrapmb</Link>© 2022
                </p>
                <ul className="footer-bootm-list order-md-2 order-1">
                  <li>
                    <Link href="/contact">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href="/contact">Privecy Policy</Link>
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
