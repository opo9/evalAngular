mvApp.controller('MovieController', function(MoviesService){
    this.movie = MoviesService.getMovieByTitle("title1");
})