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