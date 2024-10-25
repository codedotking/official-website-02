(function (a) {
  var c = new Swiper(".sliderone", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: { el: ".swiper-pagination", clickable: true },
  });
  a(".js-tilt").tilt({
    base: window,
    reset: true,
    scale: 1.02,
    reverse: true,
    max: 15,
    perspective: 3000,
    speed: 4000,
  });
  if (a(".odometer").length) {
    var b = a(".odometer").offset().top;
    var d = a(window).height();
    if (b < d) {
      a(".odometer").each(function () {
        a(this).html(a(this).data("count-to"));
      });
    }
    a(window).on("scroll", function () {
      var e = a(".odometer").offset().top;
      function f() {
        var g = a(window).scrollTop(),
          i = a(window).height();
        var h = Math.round(g + i / 1.2);
        return h;
      }
      if (e < f()) {
        a(".odometer").each(function () {
          a(this).html(a(this).data("count-to"));
        });
      }
    });
  }
  a(".grid").imagesLoaded(function () {
    a(".portfolio-menu-active").on("click", "button", function () {
      var f = a(this).attr("data-filter");
      e.isotope({ filter: f });
    });
    var e = a(".grid").isotope({
      itemSelector: ".grid-item",
      percentPosition: true,
      layoutMode: "masonry",
      masonry: { columnWidth: ".grid-item" },
    });
  });
  a(".isotope-btn-add-active button").on("click", function (e) {
    a(this).siblings(".active").removeClass("active");
    a(this).addClass("active");
    e.preventDefault();
  });
  var c = new Swiper(".testimonialone", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: false,
    allowTouchMove: true,
    navigation: {
      nextEl: ".testimonialone .swiper-btn-next",
      prevEl: ".testimonialone .swiper-btn-prev",
    },
  });
  var c = new Swiper(".testimonialtwo", {
    slidesPerView: 3,
    loop: true,
    pagination: false,
    allowTouchMove: true,
    navigation: false,
    pagination: { el: ".swiper-pagination", clickable: true },
    breakpoints: {
      0: { slidesPerView: 1 },
      480: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    },
  });
  var c = new Swiper(".brand-slider", {
    loop: true,
    speed: 800,
    autoplay: false,
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 80 },
      480: { slidesPerView: 2, spaceBetween: 140 },
      768: { slidesPerView: 3, spaceBetween: 140 },
      992: { slidesPerView: 3, spaceBetween: 200 },
      1200: { slidesPerView: 5, spaceBetween: 140 },
    },
  });
  var c = new Swiper(".brand-slider-two", {
    loop: true,
    speed: 800,
    autoplay: false,
    slidesPerView: 4,
    spaceBetween: 0,
    pagination: false,
    navigation: false,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 20 },
      480: { slidesPerView: 2, spaceBetween: 60 },
      768: { slidesPerView: 3, spaceBetween: 80 },
      992: { slidesPerView: 3, spaceBetween: 100 },
      1200: { slidesPerView: 4, spaceBetween: 110 },
    },
  });
  var c = new Swiper(".portfolio-carousel", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: false,
    navigation: {
      nextEl: ".portfolio-carousel-wrapper .swiper-btn-next",
      prevEl: ".portfolio-carousel-wrapper .swiper-btn-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 3 },
    },
  });
  a(".video-popup").fancybox();
})(jQuery);
