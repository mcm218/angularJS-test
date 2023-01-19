"use strict";

angular.module("movieList").component("movieList", {
  templateUrl: "movie-list/movie-list.template.html",
  controller: [
    "$routeParams",
    "Movie",
    function MovieListController($routeParams, Movie) {
      let self = this;
      this.query = "Harry";
      this.search = function () {
        Movie.search(this.query).then(
          function successCallback(response) {
            console.log(response.data.Search);
            self.movies = response.data.Search;
          },
          function errorCallback(response) {
            console.log(response);
          }
        );
      };

      this.search();
    },
  ],
});
