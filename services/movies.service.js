mvApp.factory('MoviesService', function(GradesService) {


        let movies = [
            {
                id:1,
                title: "title1",
                desc: "desc1",
                checked: false,
                grade: GradesService.getGradesByMovieId(1),
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
                grade: GradesService.getGradesByMovieId(2),
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
        console.log(movies)
        let grade = [4.5, 5, 6];
    
    return {
        getMovies: function () {
            return movies;
        },
        getMovieById: function (id) {
            for (elem of movies) {
                if (elem.id == id) {
                    return elem
                }
            }
        },
        addMovie: function (movie) {
            movies.push(movie);
        },
        averageGrade: function(){
            let sum = 0;
            for(elem of grade){
                sum += elem;
            }
            return Math.round(sum / grade.length);
    }
    };
});