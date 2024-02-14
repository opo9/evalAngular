mvApp.factory('MoviesService', function() {
        let movies = [
            {
                id:1,
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
                comments: [
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
                id:2,
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
                comments: [
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
        let grade = [4, 5, 6];
    
    return {
        getMovies: function() {
            return movies;
        },
        getMovieById: function(id){
            for(elem of movies){
                if(elem.id == id){
                  return elem
                }
            }
        },
        addMovie: function(movie) {
            movies.push(movie);
        },
        averageGrade: function(){
        let sum = 0;
        for(elem of grade){
            sum += elem;
        }
        return sum/grade.length;
    }
    };
});