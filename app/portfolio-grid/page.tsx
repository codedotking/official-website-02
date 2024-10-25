import Image from "next/image";
export default function Page() {
  return (
    <>
      <div className="section breadcrumb-section">
        <span className="shape shape-one layer" data-speed="1">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-2.png"
            alt="Shape"
          />
        </span>
        <span className="shape shape-two layer" data-speed="2">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-5.png"
            alt="Shape"
          />
        </span>
        <span
          className="shape shape-three wow pulse"
          data-wow-duration="1s"
          data-wow-delay=".1s">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-7.png"
            alt="Shape"
          />
        </span>
        <span
          className="shape shape-four wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".1s">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-9.png"
            alt="Shape"
          />
        </span>
        <span
          className="shape shape-five wow fadeInUp"
          data-wow-duration="1.5s"
          data-wow-delay=".1s">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-10.png"
            alt="Shape"
          />
        </span>
        <div className="container">
          <div className="row">
            <div className="col-12 align-items-center text-center">
              {/* Breadcrumb Wrapper Start */}
              <div className="breadcrumb-wrapper">
                <h1 className="title">Service</h1>
                <p className="text mb-0">
                  Sed do eiusmod tempor incididunt ut labore et when the musis
                  dolore magna aliqua.
                </p>
              </div>
              {/* Breadcrumb Wrapper End */}
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}
      {/* Service Section Start */}
      <div className="service-section section-padding">
        <div className="container">
          <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 mb-n30">
            <div
              className="col mb-30 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              {/* Single Service Start */}
              <div className="single-service">
                <div className="single-service-top">
                  <div className="icon">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/icon-3.png"
                      alt="icon"
                    />
                  </div>
                  <h4 className="title">
                    <a href="service-details.html">Digital Marketing</a>
                  </h4>
                </div>
                <p className="single-service-text">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum.
                </p>
                <a className="readmore-btn" href="service-details.html">
                  <i className="fas fa-angle-right"></i>Read More
                </a>
              </div>
              {/* Single Service End */}
            </div>
            <div
              className="col mb-30 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".3s">
              {/* Single Service Start */}
              <div className="single-service">
                <div className="single-service-top">
                  <div className="icon">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/icon-4.png"
                      alt="icon"
                    />
                  </div>
                  <h4 className="title">
                    <a href="service-details.html">Website Development</a>
                  </h4>
                </div>
                <p className="single-service-text">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum.
                </p>
                <a className="readmore-btn" href="service-details.html">
                  <i className="fas fa-angle-right"></i>Read More
                </a>
              </div>
              {/* Single Service End */}
            </div>
            <div
              className="col mb-30 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              {/* Single Service Start */}
              <div className="single-service">
                <div className="single-service-top">
                  <div className="icon">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/icon-5.png"
                      alt="icon"
                    />
                  </div>
                  <h4 className="title">
                    <a href="service-details.html">
                      Search Engine Optimization
                    </a>
                  </h4>
                </div>
                <p className="single-service-text">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum.
                </p>
                <a className="readmore-btn" href="service-details.html">
                  <i className="fas fa-angle-right"></i>Read More
                </a>
              </div>
              {/* Single Service End */}
            </div>
            <div
              className="col mb-30 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".3s">
              {/* Single Service Start */}
              <div className="single-service">
                <div className="single-service-top">
                  <div className="icon">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/icon-6.png"
                      alt="icon"
                    />
                  </div>
                  <h4 className="title">
                    <a href="service-details.html">
                      Cloud <br />
                      Hosting
                    </a>
                  </h4>
                </div>
                <p className="single-service-text">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum.
                </p>
                <a className="readmore-btn" href="service-details.html">
                  <i className="fas fa-angle-right"></i>Read More
                </a>
              </div>
              {/* Single Service End */}
            </div>
          </div>
        </div>
      </div>
      {/* Service Section End */}
      {/* Process Section Start */}
      <div className="process-section section-padding">
        <div className="container">
          <div className="row mb-n30">
            <div
              className="col-lg-6 mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay=".1s">
              {/* Section Title Start */}
              <div className="section-head">
                <span className="subtitle">Process</span>
                <h2 className="title">How We Work to Bring the Best</h2>
                <p className="text">
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  labor is tetur adipisicing elit,sed do eiusmod
                </p>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-6 mb-30">
              <div className="row mb-n30">
                <div
                  className="col-sm-6 mb-30 wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay=".1s">
                  <div className="single-process">
                    <div className="number">1</div>
                    <h6 className="title">Website Development</h6>
                    <p className="text-two">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6 mb-30 wow fadeIn"
                  data-wow-duration="1.2s"
                  data-wow-delay=".1s">
                  <div className="single-process">
                    <div className="number">2</div>
                    <h6 className="title">Website Development</h6>
                    <p className="text-two">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6 mb-30 wow fadeIn"
                  data-wow-duration="1.4s"
                  data-wow-delay=".1s">
                  <div className="single-process">
                    <div className="number">3</div>
                    <h6 className="title">Website Development</h6>
                    <p className="text-two">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div
                  className="col-sm-6 mb-30 wow fadeIn"
                  data-wow-duration="1.6s"
                  data-wow-delay=".1s">
                  <div className="single-process">
                    <div className="number">4</div>
                    <h6 className="title">Website Development</h6>
                    <p className="text-two">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process Section End */}
      {/* Pricing Plan Section Start */}
      <div className="pricing section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-12 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s"></div>
            {/* Section Title Start */}
            <div className="section-title-center section-head text-center">
              <span className="subtitle">Pricing Plans</span>
              <h2 className="title">Pick A Plan that Suits</h2>
              <p className="text mx-auto mb-0">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. when the musics over turnoff the light
              </p>
            </div>
            {/* Section Title End */}
          </div>
          <div className="row mb-n30">
            <div
              className="col-lg-4 col-md-6 mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay=".1s">
              {/* Single Pricing Start */}
              <div className="pricing-single">
                {/* Pricing Head Start */}
                <div className="pricing-head">
                  <h5 className="title">Personal</h5>
                  <div className="value">
                    <span className="price">$29</span>
                    <span className="month">Monthly</span>
                  </div>
                  <p className="text">
                    Jim Morrison says when the musics over turnoff light
                  </p>
                </div>
                {/* Pricing Head End */}
                {/* Pricing List Start */}
                <ul className="pricing-list">
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>Full business control</span>
                  </li>
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>User dashboard & analytics</span>
                  </li>
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>Custom reporting</span>
                  </li>
                  <li>
                    <Image
                      width={12}
                      height={12}
                      src="/assets/img/close-check.png"
                      alt="Check-image"
                    />
                    <span>Regular update monitoring</span>
                  </li>
                  <li>
                    <Image
                      width={12}
                      height={12}
                      src="/assets/img/close-check.png"
                      alt="Check-image"
                    />
                    <span>24/7 priority support</span>
                  </li>
                </ul>
                {/* Pricing List End */}
                {/* Pricing Footer Start */}
                <div className="pricing-footer">
                  <a href="contact.html" className="btn btn-style-four">
                    Signup Now
                  </a>
                </div>
                {/* Pricing Footer End */}
              </div>
              {/* Single Pricing End */}
            </div>
            <div
              className="col-lg-4 col-md-6 mb-30 wow fadeIn"
              data-wow-duration="1.2s"
              data-wow-delay=".1s">
              {/* Single Pricing Start */}
              <div className="pricing-single">
                {/* Pricing Head Start */}
                <div className="pricing-head">
                  <h5 className="title">Team</h5>
                  <div className="value">
                    <span className="price">$49</span>
                    <span className="month">Monthly</span>
                  </div>
                  <p className="text">
                    Jim Morrison says when the musics over turnoff light
                  </p>
                </div>
                {/* Pricing Head End */}
                {/* Pricing List Start */}
                <ul className="pricing-list">
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>Full business control</span>
                  </li>
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>User dashboard & analytics</span>
                  </li>
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>Custom reporting</span>
                  </li>
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>Regular update monitoring</span>
                  </li>
                  <li>
                    <Image
                      width={12}
                      height={12}
                      src="/assets/img/close-check.png"
                      alt="Check-image"
                    />
                    <span>24/7 priority support</span>
                  </li>
                </ul>
                {/* Pricing List End */}
                {/* Pricing Footer Start */}
                <div className="pricing-footer">
                  <a href="contact.html" className="btn btn-style-four active">
                    Signup Now
                  </a>
                </div>
                {/* Pricing Footer End */}
              </div>
              {/* Single Pricing End */}
            </div>
            <div
              className="col-lg-4 col-md-6 mb-30 wow fadeIn"
              data-wow-duration="1.5s"
              data-wow-delay=".1s">
              {/* Single Pricing Start */}
              <div className="pricing-single">
                {/* Pricing Head Start */}
                <div className="pricing-head">
                  <h5 className="title">Business</h5>
                  <div className="value">
                    <span className="price">$29</span>
                    <span className="month">Monthly</span>
                  </div>
                  <p className="text">
                    Jim Morrison says when the musics over turnoff light
                  </p>
                </div>
                {/* Pricing Head End */}
                {/* Pricing List Start */}
                <ul className="pricing-list">
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>Full business control</span>
                  </li>
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>User dashboard & analytics</span>
                  </li>
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>Custom reporting</span>
                  </li>
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>Regular update monitoring</span>
                  </li>
                  <li>
                    <Image
                      width={16}
                      height={12}
                      src="/assets/img/check.png"
                      alt="Check-image"
                    />
                    <span>24/7 priority support</span>
                  </li>
                </ul>
                {/* Pricing List End */}
                {/* Pricing Footer Start */}
                <div className="pricing-footer">
                  <a href="contact.html" className="btn btn-style-four">
                    Signup Now
                  </a>
                </div>
                {/* Pricing Footer End */}
              </div>
              {/* Single Pricing End */}
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Plan Section End */}
      {/* Work Banner Start */}
      <div
        className="section-margin-bottom service-work wow fadeIn"
        data-wow-duration="1s"
        data-wow-delay=".1s">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="work-banner">
                {/* Section Title Start */}
                <div className="section-title-center section-head text-start mb-0">
                  <span className="subtitle">We Are Here For You</span>
                  <h2 className="title">Let’s Get Back to Work</h2>
                  <p className="text mb-0">
                    Gom ad minim veniam,quis nostrud exercitation ullamco labor
                    is tetur adip isicing elit,sed do eiusmod
                  </p>
                </div>
                {/* Section Title End */}
                {/* Portfolio Button Start */}
                <a className="btn-style-three" href="">
                  Read More
                </a>
                {/* Portfolio Button End */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Work Banner End */}
      {/* Testimonial Section Start */}
      <div className="testimonial-two section-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Start */}
              <div className="section-title-center section-head text-center">
                <span className="subtitle">Testimonial</span>
                <h2 className="title">What People Say</h2>
                <p className="text mx-auto mb-0">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. when the musics over turnoff the light
                </p>
              </div>
              {/* Section Title End */}
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
                    {/*== Start Testimonial Item ==*/}
                    <div className="testimonialtwo-single">
                      <div className="testimonialtwo-top">
                        <div className="testimonialtwo-quote">
                          <Image
                            width={60}
                            height={52}
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
                          width={302}
                          height={4}
                          src="/assets/img/border.png"
                          alt="Testimonial-Border"
                        />
                      </div>
                      <div className="testimonialtwo-content">
                        <div className="testimonialtwo-thumb">
                          <Image
                            width={72}
                            height={72}
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
                    {/*== End Testimonial Item ==*/}
                  </div>
                  <div
                    className="swiper-slide wow slideInUp"
                    data-wow-duration="1.25s"
                    data-wow-delay=".1s">
                    {/*== Start Testimonial Item ==*/}
                    <div className="testimonialtwo-single">
                      <div className="testimonialtwo-top">
                        <div className="testimonialtwo-quote">
                          <Image
                            width={60}
                            height={52}
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
                          width={302}
                          height={4}
                          src="/assets/img/border.png"
                          alt="Testimonial-Border"
                        />
                      </div>
                      <div className="testimonialtwo-content">
                        <div className="testimonialtwo-thumb">
                          <Image
                            width={72}
                            height={72}
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
                    {/*== End Testimonial Item ==*/}
                  </div>
                  <div
                    className="swiper-slide wow slideInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".1s">
                    {/*== Start Testimonial Item ==*/}
                    <div className="testimonialtwo-single">
                      <div className="testimonialtwo-top">
                        <div className="testimonialtwo-quote">
                          <Image
                            width={60}
                            height={52}
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
                          width={302}
                          height={4}
                          src="/assets/img/border.png"
                          alt="Testimonial-Border"
                        />
                      </div>
                      <div className="testimonialtwo-content">
                        <div className="testimonialtwo-thumb">
                          <Image
                            width={72}
                            height={72}
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
                    {/*== End Testimonial Item ==*/}
                  </div>
                </div>
                <div className="swiper-pagination sliderone-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial Section Start */}
      {/* FAQ Section Start */}
      <div className="faq section-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Start */}
              <div className="section-title-center section-head text-center">
                <span className="subtitle">Frequently Asked Questions</span>
                <h2 className="title">All that Need to Know</h2>
                <p className="text mx-auto mb-0">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. when the musics over turnoff the light
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="d-flex align-items-start tab-wrapper">
              <div
                className="nav flex-column nav-pills faq-tab col-lg-4 col-sm-4 wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".1s"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical">
                <button
                  className="nav-link active faq-link"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true">
                  About Service
                </button>
                <button
                  className="nav-link faq-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false">
                  Subscription & Billing
                </button>
                <button
                  className="nav-link faq-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false">
                  Refund Policy
                </button>
                <button
                  className="nav-link faq-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false">
                  Support
                </button>
              </div>
              <div
                className="tab-content col-lg-7 offset-lg-1 col-sm-8 wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".4s"
                id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab">
                  <div className="accordion" id="faqone">
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
                          Why Egens are so popular amonth others?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show faq-accordion-collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqone">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
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
                          What is the best way to get best from Egens?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse faq-accordion-collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqone">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
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
                          What makes Egens best creative template?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse faq-accordion-collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqone">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2
                        className="accordion-header faq-accordion-header"
                        id="headingFour">
                        <button
                          className="accordion-button collapsed faq-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseThree">
                          What is the future plan for Egens?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse faq-accordion-collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faqone">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab">
                  <div className="accordion" id="faqtwo">
                    <div className="accordion-item faq-accordion-item">
                      <h2
                        className="accordion-header faq-accordion-header"
                        id="headingFive">
                        <button
                          className="accordion-button faq-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="true"
                          aria-controls="collapseFive">
                          Why Egens are so popular amonth others?
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse show faq-accordion-collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faqtwo">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2
                        className="accordion-header faq-accordion-header"
                        id="headingSix">
                        <button
                          className="accordion-button collapsed faq-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix">
                          What is the best way to get best from Egens?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse faq-accordion-collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#faqtwo">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2
                        className="accordion-header faq-accordion-header"
                        id="headingSeven">
                        <button
                          className="accordion-button collapsed faq-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven">
                          What makes Egens best creative template?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse faq-accordion-collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#faqtwo">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2
                        className="accordion-header faq-accordion-header"
                        id="headingEight">
                        <button
                          className="accordion-button collapsed faq-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight">
                          What is the future plan for Egens?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseEight"
                        className="accordion-collapse collapse faq-accordion-collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#faqtwo">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab">
                  <div className="accordion" id="faqthree">
                    <div className="accordion-item faq-accordion-item">
                      <h2
                        className="accordion-header faq-accordion-header"
                        id="headingNine">
                        <button
                          className="accordion-button faq-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseNine"
                          aria-expanded="true"
                          aria-controls="collapseNine">
                          Why Egens are so popular amonth others?
                        </button>
                      </h2>
                      <div
                        id="collapseNine"
                        className="accordion-collapse collapse show faq-accordion-collapse"
                        aria-labelledby="headingNine"
                        data-bs-parent="#faqthree">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2
                        className="accordion-header faq-accordion-header"
                        id="headingTen">
                        <button
                          className="accordion-button collapsed faq-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTen"
                          aria-expanded="false"
                          aria-controls="collapseTen">
                          What is the best way to get best from Egens?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseTen"
                        className="accordion-collapse collapse faq-accordion-collapse"
                        aria-labelledby="headingTen"
                        data-bs-parent="#faqthree">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab">
                  <div className="accordion" id="faqfour">
                    <div className="accordion-item faq-accordion-item">
                      <h2
                        className="accordion-header faq-accordion-header"
                        id="headingEleven">
                        <button
                          className="accordion-button faq-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEleven"
                          aria-expanded="true"
                          aria-controls="collapseEleven">
                          Why Egens are so popular amonth others?
                        </button>
                      </h2>
                      <div
                        id="collapseEleven"
                        className="accordion-collapse collapse show faq-accordion-collapse"
                        aria-labelledby="headingEleven"
                        data-bs-parent="#faqfour">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item faq-accordion-item">
                      <h2
                        className="accordion-header faq-accordion-header"
                        id="headingTwelve">
                        <button
                          className="accordion-button collapsed faq-accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwelve"
                          aria-expanded="false"
                          aria-controls="collapseTwelve">
                          What is the best way to get best from Egens?{" "}
                        </button>
                      </h2>
                      <div
                        id="collapseTwelve"
                        className="accordion-collapse collapse faq-accordion-collapse"
                        aria-labelledby="headingTwelve"
                        data-bs-parent="#faqfour">
                        <div className="accordion-body">
                          Sed do eiusmod tempor incididunt ut labore et dolore
                          magna aliqua boris nisi ut aliquip ex ea commodo
                          consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu caecat cupidatat
                          non proident{" "}
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
      {/* FAQ Section End */}
    </>
  );
}
