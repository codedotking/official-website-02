export default function ProgressSection() {
  return (
    <div className="progress-section section-padding">
      <div className="container">
        <div className="row align-items-center mb-n30">
          <div
            className="col-lg-6 mb-30 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay=".1s">
            <div className="section-title-center section-head text-start mb-0">
              <span className="subtitle">We Are Agens</span>
              <h2 className="title">We Work to Help You Grow</h2>
              <p className="text-two mw-100 mb-0">
                Ut enim ad minim veniam,quis nostrud exercitation ullamco labor
                is tetur adipisicing elit,sed do eiusmod
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 mb-30 wow fadeIn"
            data-wow-duration="1.5s"
            data-wow-delay=".1s">
            <div className="progress-area">
              <h5 className="progress-title">Website Development</h5>
              <div className="progress">
                <div
                  className="progress-bar single-progress wow fadeInLeft"
                  data-wow-duration="0.7s"
                  data-wow-delay=".1s"
                  role="progressbar"
                  style={{ width: "78%" }}
                  aria-valuenow={78}
                  aria-valuemin={0}
                  aria-valuemax={100}></div>
                <span className="progress-number">78%</span>
              </div>
              <h5 className="progress-title">Digital Marketing</h5>
              <div className="progress">
                <div
                  className="progress-bar single-progress wow fadeInLeft"
                  data-wow-duration="0.7s"
                  data-wow-delay=".2s"
                  role="progressbar"
                  style={{ width: "88%" }}
                  aria-valuenow={88}
                  aria-valuemin={0}
                  aria-valuemax={100}></div>
                <span className="progress-number">88%</span>
              </div>
              <h5 className="progress-title">Search Engine Optimization</h5>
              <div className="progress">
                <div
                  className="progress-bar single-progress wow fadeInLeft"
                  data-wow-duration="0.7s"
                  data-wow-delay=".3s"
                  role="progressbar"
                  style={{ width: "65%" }}
                  aria-valuenow={65}
                  aria-valuemin={0}
                  aria-valuemax={100}></div>
                <span className="progress-number">65%</span>
              </div>
            </div>{" "}
            {/* Progress Area End */}
          </div>
        </div>
      </div>
    </div>
  );
}
