mvApp.controller('MoviesController', ['MoviesService','UsersService',function(MoviesService, UsersService){
    this.movies = MoviesService.getMovies();
    this.usersService = UsersService;
    this.moviesService = MoviesService;

    this.sortByPopularity = function(){
        this.movies = this.moviesService.getMoviesSortByPopularity();
    }
}])