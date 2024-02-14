mvApp.controller('MovieController', function(MoviesService){
    this.movie = MoviesService.getMovieById(1);
})