mvApp.controller('MoviesController', ['MoviesService','UsersService', 'GradesService',function(MoviesService, UsersService, GradesService){
    this.movies = MoviesService.getMovies();
    this.usersService = UsersService;
    this.gradesService = GradesService;
}])