mvApp.controller('MovieController', ['UsersService', 'MoviesService', function (UsersService, MoviesService) {
    this.movie = MoviesService.getMovieById(1);
    this.movie.averageGrade = MoviesService.averageGrade(this.movie.grade);
    this.usersService = UsersService;
}]);