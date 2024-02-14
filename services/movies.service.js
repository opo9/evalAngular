mvApp.factory('MoviesService', function(GradesService) {


        let movies = [
            {
                id:1,
                title: "title1",
                desc: "desc1",
                checked: false,
                average_grade: this.averageGrade(1),
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
                average_grade: this.averageGrade(2),
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
        averageGrade: function(id){
            let grades = GradesService.getGradesByMovieId(id)
            let sum = 0;
            for(elem of grades){
                sum += elem.star;
            }
            return Math.round(sum / grade.length);
    }
    };
});