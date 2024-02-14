mvApp.controller('MoviesController', function(MoviesService){
    this.movies = MoviesService.getMovies();
})