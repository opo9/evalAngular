mvApp.controller('MoviesController', ['MoviesService','UsersService',function(MoviesService, UsersService){
    this.movies = MoviesService.getMovies();
    this.usersService = UsersService;
}])