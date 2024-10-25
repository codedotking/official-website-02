import Image from "next/image";

export default function About() {
  return (
    <div className="about section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="main-image">
              <Image
                className="about-img js-tilt"
                 width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/about.png"
                alt="about"
              />
              <div
                className="shape-one wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".1s">
                <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/shape-one1.png" alt="Shape" />
              </div>
              <div
                className="shape-two wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".1s">
                <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/shape-two1.png" alt="Shape" />
              </div>
              <div
                className="about-icon icon-one wow flipInY"
                data-wow-duration="2s"
                data-wow-delay=".6s">
                <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/icon-1.png" alt="Icon" />
              </div>
              <div
                className="about-icon icon-two wow flipInY"
                data-wow-duration="2s"
                data-wow-delay=".6s">
                <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/icon-2.png" alt="Icon" />
              </div>
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
            <div className="about-content">
              <div
                className="section-head wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay=".1s">
                <span className="subtitle">We Are Egens</span>
                <h2 className="title">We Work to Ensure Your Success</h2>
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
        </div>
      </div>
    </div>
  );
}
