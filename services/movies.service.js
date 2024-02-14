mvApp.factory('MoviesService', function(GradesService) {


        let movies = [
            {
                id:1,
                title: "cTitle1",
                desc: "desc1",
                checked: false,
                average_grade: calculateAverageGrade(1, GradesService),
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
                title: "bTitle2",
                desc: "desc2",
                checked: false,
                average_grade: calculateAverageGrade(2, GradesService),
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
                id:3,
                title: "aTitle3",
                desc: "desc3",
                checked: false,
                average_grade: calculateAverageGrade(3, GradesService) ? calculateAverageGrade(3, GradesService) : "Pas de note",
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
    function calculateAverageGrade(id, GradesService) {
        let grades = GradesService.getGradesByMovieId(id);

        let sum = 0;

        for (let elem of grades) {
            sum += elem.star;
        }

        return Math.round(sum / grades.length);
    }
    
    return {
        getMovies: function() {
            return movies.sort((a, b) => a.title.localeCompare(b.title));
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
            return Math.round(sum / grades.length);
        }
    };
});