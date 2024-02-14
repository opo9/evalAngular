mvApp.controller('MovieController', function(MoviesService){
    this.movies = MoviesService.getMovies();
})