mvApp.controller('MovieController', ['UsersService', 'MoviesService', 'CommentsService', function (UsersService, MoviesService, CommentsService) {
    this.movie = MoviesService.getMovieById(1);
    this.movie.averageGrade = MoviesService.averageGrade(this.movie.grade);
    this.usersService = UsersService;
    this.CommentsService = CommentsService;
    this.newComment = '';

    this.addComment = function() {
        if (this.newComment) {
            let comment = {
                id: this.CommentsService.getComments().length + 1,
                movie_id: this.movie.id,
                user: this.usersService.getCurrentUserId(),
                comment: this.newComment
            };
            this.CommentsService.addComment(comment);
            this.newComment = '';
            this.movie.comments = this.CommentsService.getCommentsByMovieId(this.movie.id);
        }
    };
}]);
