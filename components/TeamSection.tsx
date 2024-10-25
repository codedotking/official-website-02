import Image from "next/image";
import Link from "next/link";

export default function TeamSectioin() {
  return (
    <div className="team-section section-padding team-about-section">
      <div className="container">
        <div className="row">
          <div
            className="col-12 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay=".1s">
            {/* Section Title Start */}
            <div className="section-title-center section-head text-center">
              <span className="subtitle">Team Members</span>
              <h2 className="title">Our Team Members</h2>
              <p className="text mx-auto mb-0">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. when the musics over turn off the light
              </p>
            </div>{" "}
            {/* Section Title End */}
          </div>
        </div>
        <div className="row mb-n30">
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12 mb-30 team-wrapper wow fadeInUp"
            data-wow-duration=".6s"
            data-wow-delay=".1s">
            {/* Single Team Wrapper Start */}
            <div className="single-team">
              <div className="team-thumb">
                <Link className="image" href="/team/member">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/team-1.png" alt="Team" />
                </Link>
              </div>
              <ul className="sidebar-social">
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
                  <Link href="https://www.instagram.com/" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
              <div className="team-content">
                <h4 className="title">
                  <Link href="/team/member">Jewel Hafiz</Link>
                </h4>
                <span className="subtitle">Founder & CEO</span>
              </div>
            </div>{" "}
            {/* Single Team Wrapper End */}
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12 mb-30 team-wrapper wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay=".1s">
            {/* Single Team Wrapper Start */}
            <div className="single-team">
              <div className="team-thumb">
                <Link className="image" href="/team/member">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/team-2.png" alt="Team" />
                </Link>
              </div>
              <ul className="sidebar-social">
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
                  <Link href="https://www.instagram.com/" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
              <div className="team-content">
                <h4 className="title">
                  <Link href="/team/member">Jenny Alex</Link>
                </h4>
                <span className="subtitle">Founder & CEO</span>
              </div>
            </div>{" "}
            {/* Single Team Wrapper End */}
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12 mb-30 team-wrapper wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s">
            {/* Single Team Wrapper Start */}
            <div className="single-team">
              <div className="team-thumb">
                <Link className="image" href="/team/member">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/team-3.png" alt="Team" />
                </Link>
              </div>
              <ul className="sidebar-social">
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
                  <Link href="https://www.instagram.com/" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
              <div className="team-content">
                <h4 className="title">
                  <Link href="/team/member">John Pretty</Link>
                </h4>
                <span className="subtitle">Founder & CEO</span>
              </div>
            </div>{" "}
            {/* Single Team Wrapper End */}
          </div>
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12 mb-30 team-wrapper wow fadeInUp"
            data-wow-duration="1.2s"
            data-wow-delay=".1s">
            {/* Single Team Wrapper Start */}
            <div className="single-team">
              <div className="team-thumb">
                <Link className="image" href="/team/member">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/team-4.png" alt="Team" />
                </Link>
              </div>
              <ul className="sidebar-social">
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
                  <Link href="https://www.instagram.com/" className="instagram">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
              </ul>
              <div className="team-content">
                <h4 className="title">
                  <Link href="/team/member">Catherin Betty</Link>
                </h4>
                <span className="subtitle">Founder & CEO</span>
              </div>
            </div>{" "}
            {/* Single Team Wrapper End */}
          </div>
        </div>
      </div>
    </div>
  );
}
