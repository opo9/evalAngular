mvApp.factory('CommentsService', function($rootScope) {
    let comments = [
        {
            id:1,
            user: 1,
            movie_id: 1,
            comment: "super",
        },
        {
            id:2,
            movie_id: 1,
            user: 2,
            comment: "pas top",
        },
        {
            id:3,
            movie_id:1,
            user: 3,
            comment: "whaou",
        },
        {
            id:4,
            movie_id:2,
            user: 3,
            comment: "bof",
        },
        {
            id:5,
            movie_id:2,
            user: 3,
            comment: "pas mal",
        },
        {
            id:6,
            movie_id:3,
            user: 3,
            comment: "super",
        }
    ]

    return {
        getComments: function() {
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
            comments.unshift(comment);
        }
    };
});