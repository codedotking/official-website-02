(function (a) {
  var b = {
    i: function (c) {
      b.d();
      b.methods();
    },
    d: function (c) {
      (this._window = a(window)),
        (this._document = a(document)),
        (this._body = a("body")),
        (this._html = a("html"));
    },
    methods: function (c) {
      b.radialProgress();
    },
    radialProgress: function () {
      a(".radial-progress").waypoint(
        function () {
          a(".radial-progress").easyPieChart({
            lineWidth: 10,
            scaleLength: 0,
            rotate: 0,
            trackColor: false,
            lineCap: "round",
            size: 123,
          });
        },
        { triggerOnce: true, offset: "bottom-in-view" }
      );
    },
  };
  b.i();
})(jQuery);
