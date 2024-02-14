mvApp.controller('MovieController', function(MoviesService){
    this.movie = MoviesService.getMovieById(1);
    this.movie.averageGrade = MoviesService.averageGrade(this.movie.grade);
})