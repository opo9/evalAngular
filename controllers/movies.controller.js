mvApp.controller('MoviesController', ['MoviesService','UsersService', 'GradesService',function(MoviesService, UsersService, GradesService){
    this.movies = MoviesService.getMovies();
    this.usersService = UsersService;
    this.moviesService = MoviesService;
    this.gradesService = GradesService;

    this.$onInit = function(){
        this.usersService.cached();
    };

    this.sortByPopularity = function(){
        this.movies = this.moviesService.getMoviesSortByPopularity();
    }
}])