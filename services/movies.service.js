mvApp.factory('MoviesService', function(GradesService, CommentsService) {
        let movies = [
            {
                id:1,
                title: "La Ligne verte",
                desc: "Paul Edgecomb, Gardien-chef du pénitencier de Cold Mountain en 1935, était chargé de veiller au bon déroulement des exécutions capitales. Parmi les prisonniers se trouvait un colosse du nom de John Coffey...",
                checked: false,
                average_grade: calculateAverageGrade(1)? calculateAverageGrade(1) : "Pas de note",
                comments: CommentsService.getCommentsByMovieId(1),
            },
            {
                id:2,
                title: "Forrest Gump",
                desc: "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.",
                checked: false,
                average_grade: calculateAverageGrade(2)? calculateAverageGrade(2) : "Pas de note",
                comments: CommentsService.getCommentsByMovieId(2),
            },
{
                id:3,
                title: "La Liste de Schindler",
                desc: "Evocation des années de guerre d'Oskar Schindler, industriel autrichien rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique.",
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