mvApp.factory('MoviesService', function(GradesService, CommentsService) {


        let movies = [
            {
                id:1,
                title: "cTitle1",
                desc: "desc1",
                checked: false,
                average_grade: calculateAverageGrade(1)? calculateAverageGrade(1) : "Pas de note",
                comments: CommentsService.getCommentsByMovieId(1),

            },
            {
                id:2,
                title: "bTitle2",
                desc: "desc2",
                checked: false,
                average_grade: calculateAverageGrade(2)? calculateAverageGrade(2) : "Pas de note",
                comments: CommentsService.getCommentsByMovieId(2),
            },
{
                id:3,
                title: "aTitle3",
                desc: "desc3",
                checked: false,
                average_grade: calculateAverageGrade(3)? calculateAverageGrade(3) : "Pas de note",
                comments: CommentsService.getCommentsByMovieId(3),
            }
        ]


    function calculateAverageGrade(id) {
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
        averageGrade: function(id, GradesService){
            return calculateAverageGrade(id, GradesService);

        }
    };
});