mvApp.controller('MovieController', 'MoviesService', function(MoviesService){
    this.movie = MoviesService.getMovieById(1);
})