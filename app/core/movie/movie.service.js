'use strict';

angular
  .module("core.movie")
  .factory("Movie", ['$http',
  function ($http) {
    var shinyNewServiceInstance;

    const api = "http://www.omdbapi.com/?apikey=ec67b3f8&";

    function search(query) {
      return $http({
        method: "GET",
        url: api + "s=" + sanitizeString(query),
      });
    }

    function sanitizeString(str) {
      str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
      return str.trim();
    }

    // factory function body that constructs shinyNewServiceInstance
    return { search: search };
  },
]);
