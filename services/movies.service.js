mvApp.factory('MoviesService', function(GradesService, CommentsService) {
        let movies = [
            {
                id:1,
                title: "Title1",
                desc: "desc1",
                checked: false,
                average_grade: calculateAverageGrade(1)? calculateAverageGrade(1) : "Pas de note",
                comments: CommentsService.getCommentsByMovieId(1),
            },
            {
                id:2,
                title: "Title2",
                desc: "desc2",
                checked: false,
                average_grade: calculateAverageGrade(2)? calculateAverageGrade(2) : "Pas de note",
                comments: CommentsService.getCommentsByMovieId(2),
            },
{
                id:3,
                title: "Title3",
                desc: "desc3",
                checked: false,
                average_grade: calculateAverageGrade(3)? calculateAverageGrade(3) : "Pas de note",
                comments: CommentsService.getCommentsByMovieId(3),
            }
        ]

        const POID = 20;

    function calculateAverageGrade(id) {
        let grades = GradesService.getGradesByMovieId(id);

        let sum = 0;

        for (let elem of grades) {
            sum += elem.star;
        }

        return Math.round(sum / grades.length * 100) / 100;
    }

    function sortByPopularity(a,b, totalNumberOfGrade){
        let ATotalGrades = GradesService.getNumberOfgradeMovie(a.id);
        let BTotalGrades = GradesService.getNumberOfgradeMovie(b.id);
        let AAverageGrade = a.average_grade;
        let BAverageGrade = b.average_grade;

        console.log(AAverageGrade,ATotalGrades, BAverageGrade, BTotalGrades, totalNumberOfGrade, "toto",((ATotalGrades * AAverageGrade) + (POID * totalNumberOfGrade))/(ATotalGrades + POID), ((BTotalGrades * BAverageGrade) + (POID * totalNumberOfGrade))/(BTotalGrades + POID), ((ATotalGrades * AAverageGrade) + (POID * totalNumberOfGrade))/(ATotalGrades + POID) - ((BTotalGrades * BAverageGrade) + (POID * totalNumberOfGrade))/(BTotalGrades + POID) );
        let scoreA = ((ATotalGrades * AAverageGrade) + (POID * totalNumberOfGrade))/(ATotalGrades + POID);
        let scoreB = ((BTotalGrades * BAverageGrade) + (POID * totalNumberOfGrade))/(BTotalGrades + POID);
        
        return scoreB - scoreA;
    }

    
    return {
        getMovies: function() {
            return movies.sort((a, b) => a.title.localeCompare(b.title));
        },
        getMoviesSortByPopularity: function(){
            let totalNumberOfGrade = GradesService.getGlobalAverageGrade();
            console.log("test");
            console.log(movies.sort((a, b) => sortByPopularity(a, b, totalNumberOfGrade)));
            return movies.sort((a, b) => sortByPopularity(a, b, totalNumberOfGrade));
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