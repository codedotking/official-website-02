import About from "@/components/About";
import BrandSection from "@/components/BrandSection";
import ProgressSection from "@/components/ProgressSection";
import TeamSectioin from "@/components/TeamSection";

export default function Home() {
  return (
    <>
      <div className="section breadcrumb-section">
        <span className="shape shape-one layer" data-speed="1">
          <img src="assets/img/shape-2.png" alt="Shape" />
        </span>
        <span className="shape shape-two layer" data-speed="2">
          <img src="assets/img/shape-5.png" alt="Shape" />
        </span>
        <span
          className="shape shape-three wow pulse"
          data-wow-duration="1s"
          data-wow-delay=".1s">
          <img src="assets/img/shape-7.png" alt="Shape" />
        </span>
        <span
          className="shape shape-four wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".1s">
          <img src="assets/img/shape-9.png" alt="Shape" />
        </span>
        <span
          className="shape shape-five wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay=".1s">
          <img src="assets/img/shape-10.png" alt="Shape" />
        </span>
        <div className="container">
          <div className="row">
            <div className="col-12 align-items-center text-center">
              <div className="breadcrumb-wrapper">
                <h1 className="title">About Us</h1>
                <p className="text mb-0">
                  Sed do eiusmod tempor incididunt ut labore et when the musis
                  dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About />
      <ProgressSection />
      {/* Progress Section End */}
      {/* Video About Section Start */}
      <div className="section-padding">
        <div className="container">
          <div className="row align-items-center mb-n30">
            <div
              className="col-xl-5 col-lg-5 mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay=".1s">
              <div className="divider-thumb" data-bg-image="">
                <div className="video-content-wrap">
                  <img
                    className="icon-img"
                    src="assets/img/about-video.png"
                    alt="Image"
                  />
                  <a
                    className="ht-popup-video video-popup"
                    href="https://player.vimeo.com/video/172601404?autoplay=1">
                    <i className="fas fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-6 offset-xl-2 offset-lg-1 mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay=".1s">
              {/* Section Title Start */}
              <div className="section-title-center section-head text-start mb-0">
                <span className="subtitle">We Are Agens</span>
                <h2 className="title">We Work to Help You Grow</h2>
                <p className="text-two mw-100 mb-0">
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  labor is tetur adipisicing elit,sed do eiusmod
                </p>
              </div>{" "}
              {/* Section Title End */}
              <div className="accordion about-accordion" id="faqone">
                <div className="accordion-item faq-accordion-item">
                  <h2
                    className="accordion-header faq-accordion-header"
                    id="headingOne">
                    <button
                      className="accordion-button faq-accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne">
                      Our Mission & Vissioin
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show faq-accordion-collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#faqone">
                    <div className="accordion-body">
                      Ut enim ad minim veniam,quis nostrud exercitation utur
                      adipisicing elit,sed do eiusmod einisha chor amay vebona
                      sukher mohona kobita tumi sopono carini hoye.{" "}
                    </div>
                  </div>
                </div>
                <div className="accordion-item faq-accordion-item">
                  <h2
                    className="accordion-header faq-accordion-header"
                    id="headingTwo">
                    <button
                      className="accordion-button collapsed faq-accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo">
                      Work Eticks & Complimency{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse faq-accordion-collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#faqone">
                    <div className="accordion-body">
                      Ut enim ad minim veniam,quis nostrud exercitation utur
                      adipisicing elit,sed do eiusmod einisha chor amay vebona
                      sukher mohona kobita tumi sopono carini hoye.{" "}
                    </div>
                  </div>
                </div>
                <div className="accordion-item faq-accordion-item">
                  <h2
                    className="accordion-header faq-accordion-header"
                    id="headingThree">
                    <button
                      className="accordion-button collapsed faq-accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree">
                      Strategy to Achive Goal{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse faq-accordion-collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#faqone">
                    <div className="accordion-body">
                      Ut enim ad minim veniam,quis nostrud exercitation utur
                      adipisicing elit,sed do eiusmod einisha chor amay vebona
                      sukher mohona kobita tumi sopono carini hoye.{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video About Section End */}
      {/* Funfact Section Start */}
      <div className="funfact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="funfact-bg funfact-bg-two">
                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n5">
                  <div
                    className="col mb-5 wow fadeInUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".1s">
                    <div className="single-funfact text-start">
                      <div className="funfact-inner">
                        <span className="odometer" data-count-to="120"></span>
                        <span className="increment">+</span>
                      </div>
                      <div className="funfact-content">
                        <p className="text">
                          Total <br />
                          Countries
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col mb-5 wow fadeInUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".3s">
                    <div className="single-funfact text-start">
                      <div className="funfact-inner">
                        <span className="odometer" data-count-to="200"></span>
                        <span className="increment">+</span>
                      </div>
                      <div className="funfact-content">
                        <p className="text">
                          Worldwide <br />
                          Companies
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col mb-5 wow fadeInUp"
                    data-wow-duration=".7s"
                    data-wow-delay=".5s">
                    <div className="single-funfact text-start">
                      <div className="funfact-inner">
                        <span className="odometer" data-count-to="50"></span>
                        <span className="text">K</span>
                        <span className="increment">+</span>
                      </div>
                      <div className="funfact-content">
                        <p className="text">
                          Yearly <br />
                          Revinew
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TeamSectioin />
      <BrandSection />
    </>
  );
}
