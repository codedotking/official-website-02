import Image from "next/image";
import Link from "next/link";
export default function TeamMembers() {
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
        <span className="shape shape-three">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-7.png"
            alt="Shape"
          />
        </span>
        <span className="shape shape-four">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/assets/img/shape-9.png"
            alt="Shape"
          />
        </span>
        <span className="shape shape-five">
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
                <h1 className="title">Contact Us</h1>
                <p className="text mb-0">
                  Sed do eiusmod tempor incididunt ut labore et when the musis
                  dolore magna aliqua.{" "}
                </p>
              </div>
              {/* Breadcrumb Wrapper End */}
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Section End */}
      {/* Contact Section Start */}
      <div className="section-padding">
        <div className="container">
          <div className="row mb-n30">
            <div className="col-lg-6 mb-30">
              {/* Section Title Start */}
              <div
                className="section-title-center section-head contact-head text-start mb-5 wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".1s">
                <span className="subtitle">Contact Us</span>
                <h2 className="title">We Want to Here from You</h2>
                <p className="text-two mw-100 mb-0">
                  Ut enim ad minim veniam,quis nostrud exercitation ullamco
                  labor is tetur adipisicing elit,sed do eiusmod
                </p>
              </div>
              {/* Section Title End */}
              {/* Contact Information Start */}
              <ul
                className="contact-info wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".1s">
                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-info-content">
                    <h3 className="title">Address</h3>
                    <span className="text">20,Bordeshi,New York,Dhaka</span>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="contact-info-content">
                    <h3 className="title">Phone</h3>
                    <span className="text">
                      <Link href="/tel:+123456789">+123 456 789</Link>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-info-content">
                    <h3 className="title">Email</h3>
                    <span className="text">
                      <Link href="/mailto:hello@egens.com">hello@egens.com</Link>
                    </span>
                  </div>
                </li>
              </ul>
              {/* Contact Information End */}
            </div>
            <div className="col-lg-6 mb-30">
              <form
                id="contact-form"
                className="comment-form-inner contact-form wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".1s"
                action="assets/php/contact.php">
                <h2 className="title">Write A Message</h2>
                <div className="row">
                  <div className="col-12 mb-3">
                    <input placeholder="Your name" name="name" />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="email" placeholder="Your email" name="email" />
                  </div>
                  <div className="col-12 mb-3">
                    <input placeholder="Your phone" name="phone" />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      name="message"
                      placeholder="Write your comment here"></textarea>
                  </div>
                  <div className="col-12 text-left">
                    <button className="btn btn-style-one" type="submit">
                      <span>Submit Now</span>
                    </button>
                  </div>
                  <div className="col-12">
                    {/*== Message Notification ==*/}
                    <div className="form-message mt-4"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section End */}
      {/* Contact Map Section Start */}
      <div className="section-margin-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="contact-map-section wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".1s">
                {/* Google Map Area Start */}
                <div className="google-map-area w-100">
                  <div className="icon">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/assets/img/contact.png"
                      alt="Map-Icon"
                    />
                  </div>
                  <div className="map-inner" style={{ width: "100%" }}>
                    <iframe src="https://maps.google.com/maps?width=100%25&amp;height=420&amp;hl=en&amp;q=london+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                  </div>
                </div>
                {/* Google Map Area Start */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Map Section End */}
    </>
  );
}
