import Image from "next/image";

export default function BrandSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="brand-slider brand-style swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {/* Single Brand Start */}
                <a className="brand-after" href="#">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/1.png" alt="Brand-Image" />
                </a>
                <a className="brand-before" href="#">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/1-1.png" alt="Brand-Image" />
                </a>{" "}
                {/* Single Brand End */}
              </div>
              <div className="swiper-slide">
                {/* Single Brand Start */}
                <a className="brand-after" href="#">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/2.png" alt="Brand-Image" />
                </a>
                <a className="brand-before" href="#">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/2-1.png" alt="Brand-Image" />
                </a>{" "}
                {/* Single Brand End */}
              </div>
              <div className="swiper-slide">
                {/* Single Brand Start */}
                <a className="brand-after" href="#">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/3.png" alt="Brand-Image" />
                </a>
                <a className="brand-before" href="#">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/3-1.png" alt="Brand-Image" />
                </a>{" "}
                {/* Single Brand End */}
              </div>
              <div className="swiper-slide">
                {/* Single Brand Start */}
                <a className="brand-after" href="#">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/4.png" alt="Brand-Image" />
                </a>
                <a className="brand-before" href="#">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/4-1.png" alt="Brand-Image" />
                </a>{" "}
                {/* Single Brand End */}
              </div>
              <div className="swiper-slide">
                {/* Single Brand Start */}
                <a className="brand-after" href="#">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/5.png" alt="Brand-Image" />
                </a>
                <a className="brand-before" href="#">
                  <Image  width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/assets/img/5-1.png" alt="Brand-Image" />
                </a>{" "}
                {/* Single Brand End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
