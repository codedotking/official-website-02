import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="slider-section">
        <div className="swiper sliderone slidertwo-style animation-style-01">
          <div className="swiper-wrapper">
            <div className="swiper-slide slider-content-two">
              {/*  Slider Content Start */}
              <div className="slider-content container">
                <span className="subtitle">We Are Egens</span>
                <h2 className="title">We Help to Develop Business</h2>
                <p className="text">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliq enim ad minim veniam,quis nostrud
                </p>
                <a href="service-details.html" className="btn btn-style-one">
                  <span>Read More</span>
                </a>
              </div>
              {/*  Slider Content End */}
              {/*  Slider Image Start */}
              <div className="slider-image slide-two-image">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/slider-2-1.png"
                  alt="Slider Image"
                />
              </div>
              {/*  Slider Image End */}
              <div className="slider-shape">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/circle-two.png"
                  alt="Slider-Shape"
                />
              </div>
            </div>
            <div className="swiper-slide slider-content-two">
              {/*  Slider Content Start */}
              <div className="slider-content container">
                <span className="subtitle">We Are Egens</span>
                <h2 className="title">We Help to Develop Business</h2>
                <p className="text">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliq enim ad minim veniam,quis nostrud
                </p>
                <a href="service-details.html" className="btn btn-style-one">
                  <span>Read More</span>
                </a>
              </div>
              {/*  Slider Content End */}
              {/*  Slider Image Start */}
              <div className="slider-image slide-two-image">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/slider-2-1.png"
                  alt="Slider Image"
                />
              </div>
              {/*  Slider Image End */}
              <div className="slider-shape">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/circle-two.png"
                  alt="Slider-Shape"
                />
              </div>
            </div>
            <div className="swiper-slide slider-content-two">
              {/*  Slider Content Start */}
              <div className="slider-content container">
                <span className="subtitle">We Are Egens</span>
                <h2 className="title">We Help to Develop Business</h2>
                <p className="text">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliq enim ad minim veniam,quis nostrud
                </p>
                <a href="service-details.html" className="btn btn-style-one">
                  <span>Read More</span>
                </a>
              </div>
              {/*  Slider Content End */}
              {/*  Slider Image Start */}
              <div className="slider-image slide-two-image">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/slider-2-1.png"
                  alt="Slider Image"
                />
              </div>
              {/*  Slider Image End */}
              <div className="slider-shape">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/circle-two.png"
                  alt="Slider-Shape"
                />
              </div>
            </div>
          </div>
          <div className="swiper-pagination slidertwo-pagination"></div>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-1 mb-n30">
            <div
              className="col mb-30 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              {/*  Single Plan Start */}
              <div className="single-plan">
                <div className="single-plan-head">
                  <div className="title-number">
                    <span className="number">02</span>
                    <h6 className="title">Creative Strategy</h6>
                  </div>
                  <div className="icon">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/icon-11.png"
                      alt="icon"
                    />
                  </div>
                </div>
                <p className="single-plan-text">
                  Sed do eiusmod tempor incididunt ut labore et alud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.{" "}
                </p>
              </div>
              {/*  Single Plan End */}
            </div>
            <div
              className="col mb-30 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              {/*  Single Plan Start */}
              <div className="single-plan">
                <div className="single-plan-head">
                  <div className="title-number">
                    <span className="number">02</span>
                    <h6 className="title">Marketing Plans</h6>
                  </div>
                  <div className="icon">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/icon-12.png"
                      alt="icon"
                    />
                  </div>
                </div>
                <p className="single-plan-text">
                  Sed do eiusmod tempor incididunt ut labore et alud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.{" "}
                </p>
              </div>
              {/*  Single Plan End */}
            </div>
            <div
              className="col mb-30 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              {/*  Single Plan Start */}
              <div className="single-plan">
                <div className="single-plan-head">
                  <div className="title-number">
                    <span className="number">02</span>
                    <h6 className="title">Critical Analysis</h6>
                  </div>
                  <div className="icon">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/icon-13.png"
                      alt="icon"
                    />
                  </div>
                </div>
                <p className="single-plan-text">
                  Sed do eiusmod tempor incididunt ut labore et alud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.{" "}
                </p>
              </div>
              {/*  Single Plan End */}
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding about-two">
        <div className="container">
          <div className="row align-items-center mb-n30">
            <div className="col-xxl-5 col-lg-4 col-12 mb-30">
              <div className="about-content">
                <div
                  className="section-head wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay=".1s">
                  <span className="subtitle">About Us</span>
                  <h2 className="title">Creative Digital Agency</h2>
                  <p className="text">
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <p className="text-two">
                    Ut enim ad minim veniam,quis nostrud exercitation ullamco
                    labor is tetur adipisicing elit,sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.{" "}
                  </p>
                  <a href="about.html" className="btn btn-style-one">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-lg-8 col-12 mb-30">
              <div className="about-two-images">
                <div className="top">
                  <Image
                    className="js-tilt"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/about-2-1.png"
                    alt="About-Image"
                  />
                  <img
                    className="js-tilt"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/about-2-2.png"
                    alt="About-Image"
                  />
                </div>
                <div className="bottom">
                  <Image
                    className="js-tilt"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/about-2-3.png"
                    alt="About-Image"
                  />
                  <img
                    className="js-tilt"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/about-2-4.png"
                    alt="About-Image"
                  />
                </div>
                <div
                  className="about-two-circle wow zoomIn"
                  data-wow-duration="1.5s"
                  data-wow-delay=".1s">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/shape-three.png"
                    alt="CircleShape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="funfact-two section-padding">
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="main-image">
                    <Image
                      className="funfact-img js-tilt"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/about-2-5.png"
                      alt="about"
                    />
                    <div
                      className="shape-one wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay=".1s"></div>
                    <div
                      className="circle-thumb wow pulse"
                      data-wow-duration="1.5s"
                      data-wow-delay=".1s">
                      <span className="number">23</span>
                      <span className="text">
                        Years in the <br />
                        Success
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="funfact-content">
                    <div
                      className="section-head wow fadeIn"
                      data-wow-duration="1.5s"
                      data-wow-delay=".1s">
                      <span className="subtitle">We Are Egens</span>
                      <h2 className="title">Make Your Business Double</h2>
                      <p className="text-two">
                        Ut enim ad minim veniam,quis nostrud exercitation
                        ullamco labor is tetur adipisicing elit,sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.{" "}
                      </p>
                      <div className="count">
                        <div className="count-single">
                          <span className="count-number">2K</span>
                          <h5 className="count-title">Projects Completed</h5>
                          <p className="count-text">
                            Sed do eiusmod tempor incidi dunt ut labore.
                          </p>
                        </div>
                        <div className="count-single">
                          <span className="count-number">5M</span>
                          <h5 className="count-title">Total Revinue</h5>
                          <p className="count-text">
                            Sed do eiusmod tempor incidi dunt ut labore.
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
      </div>

      <div className="service-two section-margin-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-head wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".1s">
                <span className="subtitle">Servcie</span>
                <h2 className="title">What We Do</h2>
                <p className="text">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. when the musics over turnoff the light
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="row mb-n30">
                <div
                  className="col-lg-6 col-md-6 col-sm-6 mb-30 wow fadeIn"
                  data-wow-duration="1.2s"
                  data-wow-delay=".1s">
                  <div className="service-two-single">
                    <div className="service-two-single-head">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/icon-3.png"
                        alt="icon"
                      />
                      <h6 className="title">
                        <a href="service-details.html">Digital Marketing</a>
                      </h6>
                    </div>
                    <p className="service-two-single-text">
                      Sed do eiusmod tempor incididunt ut labore et alud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6 mb-30 wow fadeIn"
                  data-wow-duration="1.3s"
                  data-wow-delay=".1s">
                  <div className="service-two-single">
                    <div className="service-two-single-head">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/icon-4.png"
                        alt="icon"
                      />
                      <h6 className="title">
                        <a href="service-details.html">Graphic Design</a>
                      </h6>
                    </div>
                    <p className="service-two-single-text">
                      Sed do eiusmod tempor incididunt ut labore et alud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6 mb-30 wow fadeIn"
                  data-wow-duration="1.4s"
                  data-wow-delay=".1s">
                  <div className="service-two-single">
                    <div className="service-two-single-head">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/icon-5.png"
                        alt="icon"
                      />
                      <h6 className="title">
                        <a href="service-details.html">Web Development</a>
                      </h6>
                    </div>
                    <p className="service-two-single-text">
                      Sed do eiusmod tempor incididunt ut labore et alud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.{" "}
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-6 col-md-6 col-sm-6 mb-30 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay=".1s">
                  <div className="service-two-single">
                    <div className="service-two-single-head">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/assets/img/icon-6.png"
                        alt="icon"
                      />
                      <h6 className="title">
                        <a href="service-details.html">Cloud Hosting</a>
                      </h6>
                    </div>
                    <p className="service-two-single-text">
                      Sed do eiusmod tempor incididunt ut labore et alud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="service-layer wow fadeIn"
          data-wow-duration="1.5s"
          data-wow-delay=".1s"></div>
      </div>

      <div className="section-padding-bottom portfolio-carousel-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-head wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".1s">
                <span className="subtitle">Portfolio</span>
                <h2 className="title">Our Amazing Works</h2>
                <p className="text">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. when the musics over turnoff the light
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="swiper portfolio-carousel parent-gallery">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="single-portfolio-carousel single-portfolio">
                      <a className="thumbnail" href="portfolio-details.html">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/portfolio-7.png"
                          alt=""
                        />
                      </a>
                      <div className="content">
                        <span className="subtitle">Web Design</span>
                        <h3 className="title">
                          <a href="portfolio-details.html">
                            When the musics over turn off the light
                          </a>
                        </h3>
                      </div>
                      <div className="lightbox">
                        <a className="item" href="assets/img/portfolio-7.png">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-portfolio-carousel single-portfolio">
                      <a className="thumbnail" href="portfolio-details.html">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/portfolio-8.png"
                          alt=""
                        />
                      </a>
                      <div className="content">
                        <span className="subtitle">Development</span>
                        <h3 className="title">
                          <a href="portfolio-details.html">
                            When the musics over turn off the light
                          </a>
                        </h3>
                      </div>
                      <div className="lightbox">
                        <a className="item" href="assets/img/portfolio-8.png">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-portfolio-carousel single-portfolio">
                      <a className="thumbnail" href="portfolio-details.html">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/portfolio-9.png"
                          alt=""
                        />
                      </a>
                      <div className="content">
                        <span className="subtitle">Marketing</span>
                        <h3 className="title">
                          <a href="portfolio-details.html">
                            When the musics over turn off the light
                          </a>
                        </h3>
                      </div>
                      <div className="lightbox">
                        <a className="item" href="assets/img/portfolio-9.png">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="single-portfolio-carousel single-portfolio">
                      <a className="thumbnail" href="portfolio-details.html">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/portfolio-8.png"
                          alt=""
                        />
                      </a>
                      <div className="content">
                        <span className="subtitle">Photogaphy</span>
                        <h3 className="title">
                          <a href="portfolio-details.html">
                            When the musics over turn off the light
                          </a>
                        </h3>
                      </div>
                      <div className="lightbox">
                        <a className="item" href="assets/img/portfolio-8.png">
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* == Add Swiper navigation Buttons ==*/}
                <div className="portfolio-swiper-arrow">
                  <div className="swiper-btn swiper-btn-prev">
                    <i className="fas fa-angle-left"></i>
                  </div>
                  <div className="swiper-btn swiper-btn-next">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Portfolio Carousel Start */}
      {/*  Team Members Section Start */}
      <div className="team-two section-padding-bottom">
        <div className="container">
          <div className="row align-items-center mb-n30">
            <div className="col-xl-5 col-lg-6 mb-30">
              <div
                className="section-head wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".1s">
                <span className="subtitle">Team Members</span>
                <h2 className="title">Meet Our Amazing Team Members</h2>
                <p className="text-two">
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  labor is tetur adipisicing elit,sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <a href="team-members.html" className="btn btn-style-one">
                  <span>Read More</span>
                </a>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 col-lg-6 mb-30">
              <div className="team-group">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/group-1.png"
                  alt=""
                  className="team-group-one group-image js-tilt"
                />
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/group-2.png"
                  alt=""
                  className="team-group-two group-image js-tilt"
                />
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/assets/img/group-3.png"
                  alt=""
                  className="team-group-three group-image js-tilt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Team Members Section End */}
      {/*  Testimonial Section Start */}
      <div className="testimonial-two testimonial-style-two section-padding-top section-margin-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/*  Section Title Start */}
              <div className="section-title-center section-head text-center">
                <span className="subtitle">Testimonial</span>
                <h2 className="title">What People Say</h2>
                <p className="text mx-auto mb-0">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. when the musics over turnoff the light
                </p>
              </div>
              {/*  Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="swiper testimonialtwo swiper-container-autoheight">
                <div className="swiper-wrapper">
                  <div
                    className="swiper-slide wow slideInUp"
                    data-wow-duration="1s"
                    data-wow-delay=".1s">
                    {/* == Start Testimonial Item ==*/}
                    <div className="testimonialtwo-single">
                      <div className="testimonialtwo-top">
                        <div className="testimonialtwo-quote">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/assets/img/quote-3.png"
                            alt="Quote"
                          />
                        </div>
                        <p className="testimonialtwo-text">
                          Sed do eiusmod tempor indun tokhon dekhesi tumi nei
                          onoto ei diner pashe vebe dekho sob sukh ut labore et
                          dolore magna aliq ua. when the musics over turno fhe
                          light says the great Jim.
                        </p>
                      </div>
                      <div className="border-middle">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/border.png"
                          alt="Testimonial-Border"
                        />
                      </div>
                      <div className="testimonialtwo-content">
                        <div className="testimonialtwo-thumb">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/assets/img/testimonial-one.png"
                            alt="Testimonial-Image"
                          />
                        </div>
                        <div className="testimonialtwo-info">
                          <span className="name">Jack Oramson</span>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </div>
                    {/* == End Testimonial Item ==*/}
                  </div>
                  <div
                    className="swiper-slide wow slideInUp"
                    data-wow-duration="1.25s"
                    data-wow-delay=".1s">
                    {/* == Start Testimonial Item ==*/}
                    <div className="testimonialtwo-single">
                      <div className="testimonialtwo-top">
                        <div className="testimonialtwo-quote">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/assets/img/quote-3.png"
                            alt="Quote"
                          />
                        </div>
                        <p className="testimonialtwo-text">
                          Sed do eiusmod tempor indun tokhon dekhesi tumi nei
                          onoto ei diner pashe vebe dekho sob sukh ut labore et
                          dolore magna aliq ua. when the musics over turno fhe
                          light says the great Jim.
                        </p>
                      </div>
                      <div className="border-middle">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/border.png"
                          alt="Testimonial-Border"
                        />
                      </div>
                      <div className="testimonialtwo-content">
                        <div className="testimonialtwo-thumb">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/assets/img/testimonial-two.png"
                            alt="Testimonial-Image"
                          />
                        </div>
                        <div className="testimonialtwo-info">
                          <span className="name">Jack Oramson</span>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </div>
                    {/* == End Testimonial Item ==*/}
                  </div>
                  <div
                    className="swiper-slide wow slideInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".1s">
                    {/* == Start Testimonial Item ==*/}
                    <div className="testimonialtwo-single">
                      <div className="testimonialtwo-top">
                        <div className="testimonialtwo-quote">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/assets/img/quote-3.png"
                            alt="Quote"
                          />
                        </div>
                        <p className="testimonialtwo-text">
                          Sed do eiusmod tempor indun tokhon dekhesi tumi nei
                          onoto ei diner pashe vebe dekho sob sukh ut labore et
                          dolore magna aliq ua. when the musics over turno fhe
                          light says the great Jim.
                        </p>
                      </div>
                      <div className="border-middle">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/border.png"
                          alt="Testimonial-Border"
                        />
                      </div>
                      <div className="testimonialtwo-content">
                        <div className="testimonialtwo-thumb">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/assets/img/testimonial-three.png"
                            alt="Testimonial-Image"
                          />
                        </div>
                        <div className="testimonialtwo-info">
                          <span className="name">Jack Oramson</span>
                          <span className="designation">Web Developer</span>
                        </div>
                      </div>
                    </div>
                    {/* == End Testimonial Item ==*/}
                  </div>
                </div>
                <div className="swiper-pagination sliderone-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="shape-one wow pulse"
          data-wow-duration="1.5s"
          data-wow-delay=".1s">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-one3.png"
            alt="ShapeOne"
          />
        </div>
      </div>
      {/*  Testimonial Section Start */}
      {/*  Brand Section Start */}
      <div className="brand-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="brand-style-two">
                <div className="brand-slider-two brand-style swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      {/*  Single Brand Start */}
                      <a className="brand-after" href="#">
                        <img
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/1.png"
                          alt="Brand-Image"
                        />
                      </a>
                      <a className="brand-before" href="#">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/1-1.png"
                          alt="Brand-Image"
                        />
                      </a>
                      {/*  Single Brand End */}
                    </div>
                    <div className="swiper-slide">
                      {/*  Single Brand Start */}
                      <a className="brand-after" href="#">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/2.png"
                          alt="Brand-Image"
                        />
                      </a>
                      <a className="brand-before" href="#">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/2-1.png"
                          alt="Brand-Image"
                        />
                      </a>
                      {/*  Single Brand End */}
                    </div>
                    <div className="swiper-slide">
                      {/*  Single Brand Start */}
                      <a className="brand-after" href="#">
                        <img
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/3.png"
                          alt="Brand-Image"
                        />
                      </a>
                      <a className="brand-before" href="#">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/3-1.png"
                          alt="Brand-Image"
                        />
                      </a>
                      {/*  Single Brand End */}
                    </div>
                    <div className="swiper-slide">
                      {/*  Single Brand Start */}
                      <a className="brand-after" href="#">
                        <img
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/4.png"
                          alt="Brand-Image"
                        />
                      </a>
                      <a className="brand-before" href="#">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/4-1.png"
                          alt="Brand-Image"
                        />
                      </a>
                      {/*  Single Brand End */}
                    </div>
                    <div className="swiper-slide">
                      {/*  Single Brand Start */}
                      <a className="brand-after" href="#">
                        <img
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/5.png"
                          alt="Brand-Image"
                        />
                      </a>
                      <a className="brand-before" href="#">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/assets/img/5-1.png"
                          alt="Brand-Image"
                        />
                      </a>
                      {/*  Single Brand End */}
                    </div>
                  </div>
                </div>
                <div
                  className="shape-one wow pulse"
                  data-wow-duration="1.5s"
                  data-wow-delay=".1s">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/shape-one4.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Brand Section End */}
      {/*  Blog Section Start */}
      <div className="section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay=".1s">
              {/*  Section Title Start */}
              <div className="section-title-center section-head text-center">
                <span className="subtitle">Blog</span>
                <h2 className="title">Our Recent News</h2>
                <p className="text mx-auto mb-0">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. when the musics over turn off the light
                </p>
              </div>
              {/*  Section Title End */}
            </div>
          </div>
          <div className="row mb-n25">
            <div
              className="col-lg-6 mb-25 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              {/*  Single Blog Two Start */}
              <div className="single-blog-two">
                {/*  Single Blog Two Thumb Start */}
                <div className="single-blog-two-thumb">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/assets/img/blog-home-two.png"
                    alt="Blog"
                  />
                </div>
                {/*  Single Blog Two Thumb End */}
                {/*  Single Blog Two Content */}
                <div className="single-blog-two-content">
                  <ul className="meta">
                    <li>Web Design</li>
                    <li>Feb 12,2022</li>
                  </ul>
                  <h3 className="title">
                    <a href="blog-details.html">
                      Tips n tricks to make your clients happy
                    </a>
                  </h3>
                </div>
                {/*  Single Blog Two End */}
              </div>
              {/*  Single Blog Two End */}
            </div>
            <div className="col-lg-6 mb-25">
              <div className="row mb-n25">
                <div
                  className="col-md-6 mb-25 wow fadeIn"
                  data-wow-duration="1.2s"
                  data-wow-delay=".1s">
                  <div className="single-subblog">
                    <span className="subtitle">Web Development</span>
                    <h3 className="title">
                      <a href="blog-details.html">
                        When the musics over turn off the light
                      </a>
                    </h3>
                    <span className="date">Feb 03,2022</span>
                  </div>
                </div>
                <div
                  className="col-md-6 mb-25 wow fadeIn"
                  data-wow-duration="1.3s"
                  data-wow-delay=".1s">
                  <div className="single-subblog">
                    <span className="subtitle">Web Development</span>
                    <h3 className="title">
                      <a href="blog-details.html">
                        When the musics over turn off the light
                      </a>
                    </h3>
                    <span className="date">Feb 03,2022</span>
                  </div>
                </div>
                <div
                  className="col-md-6 mb-25 wow fadeIn"
                  data-wow-duration="1.4s"
                  data-wow-delay=".1s">
                  <div className="single-subblog">
                    <span className="subtitle">Web Development</span>
                    <h3 className="title">
                      <a href="blog-details.html">
                        When the musics over turn off the light
                      </a>
                    </h3>
                    <span className="date">Feb 03,2022</span>
                  </div>
                </div>
                <div
                  className="col-md-6 mb-25 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay=".1s">
                  <div className="single-subblog">
                    <span className="subtitle">Web Development</span>
                    <h3 className="title">
                      <a href="blog-details.html">
                        When the musics over turn off the light
                      </a>
                    </h3>
                    <span className="date">Feb 03,2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Blog Section End */}
      {/*  Work Banner Start */}
      <div className="workbanner-two">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="work-banner">
                {/*  Section Title Start */}
                <div className="section-title-center section-head text-start mb-0">
                  <span className="subtitle">We Are Here For You</span>
                  <h2 className="title">Let’s Get Back to Work</h2>
                  <p className="text mb-0">
                    Gom ad minim veniam,quis nostrud exercitation ullamco labor
                    is tetur adip isicing elit,sed do eiusmod
                  </p>
                </div>
                {/*  Section Title End */}
                {/*  Portfolio Button Start */}
                <a className="btn-style-three" href="service.html">
                  Read More
                </a>
                {/*  Portfolio Button End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Work Banner End */}
      <footer className="footer-wrapper footer-style-two">
        <div className="shape-one footertwo-shape">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-four.png"
            alt="Footer-Shape"
          />
        </div>
        <div className="shape-two">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-three1.png"
            alt="Footer-Shape"
          />
        </div>
        <div className="container">
          <div className="row mb-n40">
            {/*  Footer Widget Start */}
            <div className="col-lg-3 col-12 mb-40">
              <div className="footer-widget negative-margin">
                <div className="logo">
                  <a href="index.html">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/logo.png"
                      alt=""
                    />
                  </a>
                </div>
                <p className="footer-text">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cill ore magna aliqua. Ut enim ad minim veniam,quis nostrud
                  exercitation ullamco
                </p>
                <div className="subcription-form-wrapper">
                  <form
                    id="mc-form"
                    className="subscribe-form footer-form-two"
                    action="#">
                    <input
                      id="mc-email"
                      className="email"
                      type="email"
                      placeholder="Your email here"
                      name="EMAIL"
                    />
                    <button id="mc-submit" type="submit" className="button">
                      <i className="fas fa-envelope"></i>
                    </button>
                  </form>
                  {/*  mailchimp-alerts Start */}
                  <div className="mailchimp-alerts text-centre">
                    <div className="mailchimp-submitting"></div>
                    {/*  mailchimp-submitting end */}
                    <div className="mailchimp-success text-green-400"></div>
                    {/*  mailchimp-success end */}
                    <div className="mailchimp-error text-red-600"></div>
                    {/*  mailchimp-error end */}
                  </div>
                  {/*  mailchimp-alerts end */}
                </div>
              </div>
            </div>
            {/*  Footer Widget End */}
            {/*  Footer Widget Start */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-30 d-flex justify-content-lg-center justify-content-sm-start">
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
            {/*  Footer Widget End */}
            {/*  Footer Widget Start */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-30 d-flex justify-content-lg-center justify-content-md-start justify-content-sm-center">
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
            {/*  Footer Widget End */}
            {/*  Footer Widget Start */}
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-30 d-flex justify-content-sm-start">
              <div className="footer-widget">
                <h5 className="footer-widget-title">Stay Connected</h5>
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
            {/*  Footer Widget End */}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="copyright">
                <p className="order-md-1 order-2">
                  Designed with love By <Link href="/">bootstrapmb</Link>© 2022
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
      {/*  Scroll Top Start */}
      <a href="#" className="scroll-top show" id="scroll-top">
        <i className="arrow-top fas fa-angle-double-up"></i>
        <i className="arrow-bottom fas fa-angle-double-up"></i>
      </a>
    </>
  );
}
