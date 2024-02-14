mvApp.controller('MovieController', ['UsersService', 'MoviesService', 'GradesService', function (UsersService, MoviesService, GradesService) {
    this.movie = MoviesService.getMovieById(1);
    this.movie.averageGrade = MoviesService.averageGrade(this.movie.grade);
    this.usersService = UsersService;
    this.gradesService = GradesService;
}]);