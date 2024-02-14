mvApp.controller('MovieController', ['UsersService', 'MoviesService','$routeParams', function (UsersService, MoviesService, $routeParams) {
    let movieId = $routeParams.movieId;
    this.movie = MoviesService.getMovieById(movieId);
    this.movie.averageGrade = MoviesService.averageGrade(this.movie.grade);
    this.usersService = UsersService;
}]);