"use client";
import { useScroll } from "ahooks";
import Image from "next/image";
import Link from "next/link";

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
            <div className="flex items-center justify-between">
              <div className="logo">
                <Link href="/">
                  <Image
                    src="/assets/img/logo.png"
                    width={173}
                    height={48}
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex-center header-right">
                <div className="hidden  lg:flex  header-right_menu">
                  <nav className="main-menu">
                    <ul>
                      <li className="has-children">
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/">Home One</Link>
                          </li>
                          <li>
                            <Link href="/index-2">Home Two</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li className="has-children">
                        <a href="#">Service</a>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/service">Service</Link>
                          </li>
                          <li>
                            <Link href="/service-details">Service Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="#">Portfolio</a>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/portfolio">Portfolio</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-grid">Portfolio Grid</Link>
                          </li>
                          <li>
                            <Link href="/portfolio-details">
                              Portfolio Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="#">Team</a>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/team-members">Team Members</Link>
                          </li>
                          <li>
                            <Link href="/member-details">Member Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-children">
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/blog">Blog Standard</Link>
                          </li>
                          <li>
                            <Link href="/blog-grid">Blog Grid</Link>
                          </li>
                          <li>
                            <Link href="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right_actions flex-center">
                  <div className="header-social">
                    <ul className="social-icon flex-center">
                      <li>
                        <Link
                          href="https://www.facebook.com/"
                          className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="https://twitter.com/" className="twitter">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://www.linkedin.com/"
                          className="linkedin">
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
      </header>
      <div className="offcanvas offcanvas-end" id="offcanvas-header">
        <div className="offcanvas-header">
          <div className="logo">
            <Link href="">
              <Image
                src="/assets/img/logo.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt=""
              />
            </Link>
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
                    <Link href="/">Home One </Link>
                  </li>
                  <li>
                    <Link href="/index-2">Home Two</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
              <li className="menu-item-has-children">
                <a href="#">SERVICE</a>
                <ul className="dropdown">
                  <li>
                    <Link href="/service">Service</Link>
                  </li>
                  <li>
                    <Link href="/service-details">Service Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">PORTFOLIO</a>
                <ul className="dropdown">
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-grid">Portfolio Grid</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-details">Portfolio Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">TEAM</a>
                <ul className="dropdown">
                  <li>
                    <Link href="/team-members">Team Members</Link>
                  </li>
                  <li>
                    <Link href="/member-details">Member Details</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children ">
                <a href="#">BLOG</a>
                <ul className="dropdown">
                  <li>
                    <Link href="/blog">Blog Standard</Link>
                  </li>
                  <li>
                    <Link href="/blog-grid">Blog Grid</Link>
                  </li>
                  <li>
                    <Link href="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">CONTACT US </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
