"use client";
import { useScroll } from "ahooks";
import Image from "next/image";

export default function Header() {
  const scroll = useScroll();

  return (
    <>
      <header
        className={`header-wrapper sticky-header ${
          scroll && scroll.top > 0 && "sticky"
        }`}>
        <div className="">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="flex-center justify-content-between">
                  <div className="logo">
                    <a href="">
                      <Image
                        src="/assets/img/logo.png"
                        width={0}
                        height={0}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="flex-center header-right">
                    <div className="d-none d-lg-flex header-right_menu">
                      <nav className="main-menu">
                        <ul>
                          <li className="has-children">
                            <a href="#">Home</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="">Home One</a>
                              </li>
                              <li>
                                <a href="index-2">Home Two</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="about">About</a>
                          </li>
                          <li className="has-children">
                            <a href="#">Service</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="service">Service</a>
                              </li>
                              <li>
                                <a href="service-details">Service Details</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">Portfolio</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="portfolio">Portfolio</a>
                              </li>
                              <li>
                                <a href="portfolio-grid">Portfolio Grid</a>
                              </li>
                              <li>
                                <a href="portfolio-details">
                                  Portfolio Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">Team</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="team-members">Team Members</a>
                              </li>
                              <li>
                                <a href="member-details">Member Details</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-children">
                            <a href="#">Blog</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="blog">Blog Standard</a>
                              </li>
                              <li>
                                <a href="blog-grid">Blog Grid</a>
                              </li>
                              <li>
                                <a href="blog-details">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="header-right_actions flex-center">
                      <div className="header-social">
                        <ul className="social-icon flex-center">
                          <li>
                            <a
                              href="https://www.facebook.com/"
                              className="facebook">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://twitter.com/" className="twitter">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/"
                              className="linkedin">
                              <i className="fab fa-linkedin-in"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/"
                              className="instagram">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="hamburger d-block d-lg-none">
                        <a
                          className="header-action-btn header-action-btn-menu hamburger_button d-flex"
                          href="#/"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvas-header">
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="offcanvas offcanvas-end" id="offcanvas-header">
        <div className="offcanvas-header">
          <div className="logo">
            <a href="">
              <Image
                src="/assets/img/logo.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt=""
              />
            </a>
          </div>
          <button
            type="button"
            className="btn-close text-reset mobilemenu-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <nav>
            <ul className="mobile-menu">
              <li className="menu-item-has-children">
                <a href="#">HOME</a>
                <ul className="dropdown">
                  <li>
                    <a href="">Home One </a>
                  </li>
                  <li>
                    <a href="index-2">Home Two</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about">ABOUT</a>
              </li>
              <li className="menu-item-has-children">
                <a href="#">SERVICE</a>
                <ul className="dropdown">
                  <li>
                    <a href="service">Service</a>
                  </li>
                  <li>
                    <a href="service-details">Service Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">PORTFOLIO</a>
                <ul className="dropdown">
                  <li>
                    <a href="portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="portfolio-grid">Portfolio Grid</a>
                  </li>
                  <li>
                    <a href="portfolio-details">Portfolio Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">TEAM</a>
                <ul className="dropdown">
                  <li>
                    <a href="team-members">Team Members</a>
                  </li>
                  <li>
                    <a href="member-details">Member Details</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children ">
                <a href="#">BLOG</a>
                <ul className="dropdown">
                  <li>
                    <a href="blog">Blog Standard</a>
                  </li>
                  <li>
                    <a href="blog-grid">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-details">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact">CONTACT US </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
