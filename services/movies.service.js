mvApp.factory('MoviesService', function($rootScope) {
        let movies = [
            {
                title: "title1",
                desc: "desc1",
                checked: false,
                grade: [
                            {
                                star: 5
                            },
                            {
                                star: 4
                            },
                            {
                                star: 3
                            },
                        ],
                comment: [
                    {
                        user: "bob",
                        data: "super"
                    },
                    {
                        user: "jean",
                        data: "null"
                    },
                ]
            },
            {
                title: "title2",
                desc: "desc2",
                checked: false,
                grade: [
                            {
                                star: 5
                            },
                            {
                                star: 4
                            },
                            {
                                star: 3
                            },
                        ],
                comment: [
                    {
                        user: "bob",
                        data: "super"
                    },
                    {
                        user: "jean",
                        data: "null"
                    },
                ]
            }
        ]
    
    return {
        getMovies: function() {
            return movies;
        },
        addMovie: function(movie) {
            movies.push(movie);
        }
    };
});