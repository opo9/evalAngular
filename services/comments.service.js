mvApp.factory('CommentsService', function($rootScope) {
    let comments = [
        {
            id:1,
            user: 1,
            movie: 1,
            comment: "super",
        },
        {
            id:2,
            movie: 1,
            user: 2,
            comment: "pas top",
        },
        {
            id:3,
            movie:1,
            user: 3,
            comment: "whaou",
        },
    ]

    return {
        getGrades: function() {
            return comments;
        },
        getCommentsByMovieId: function(id){
            let commentsByMovie = [];
            for(elem of comments){
                if(elem.movie_id == id){
                    let comment = {comment: elem.comment};
                    commentsByMovie.push(comment);
                }
            }
            return commentsByMovie;
        },
        getCommentById: function(id){
            for(elem of comments){
                if(elem.id == id){
                return elem
                }
            }
        },
        addComment: function(comment) {
            comments.push(comment);
        }
    };
});