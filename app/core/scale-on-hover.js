angular
  .module("scaleOnHoverDirective", [])
  .directive("scaleOnHover", function () {
    return {
      link: function (scope, element, attr) {
        element.on("mouseover", function (event) {
          element.css({
            transform: "scale(1.05)",
          });
        });

        element.on("mouseout", function (event) {
          element.css({
            transform: "scale(1)",
          });
        });
      },
    };
  });
