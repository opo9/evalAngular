mvApp.factory('GradesService', function($rootScope) {
    let grades = [
        {
            id:1,
            user_id: 1,
            movie_id: 1,
            grade: 4,
        },
        {
            id:2,
            movie_id: 1,
            user_id: 2,
            grade: 2,
        },
        {
            id:3,
            movie_id:1,
            user_id: 3,
            grade: 4,
        },
        {
            id:3,
            movie_id:2,
            user_id: 3,
            grade: 4,
        },
    ]

return {
    getGrades: function() {
        return grades;
    },
    getGradesByMovieId: function(id){
        let gradesByMovie = [];
        for(elem of grades){
            if(elem.movie_id == id){
                let grade = {star: elem.grade};
                gradesByMovie.push(grade);
            }
        }
        return gradesByMovie;
    },
    getGradeByid: function(id){
        for(elem of grades){
            if(elem.id == id){
              return elem
            }
        }
    },
    addGrade: function(grade) {
        console.log(grade);
        //grades.push(grade);
    },
    addGradeToMovie : function(id_movie, grade){
        grade.movie = id_movie;
        grades.push(grade);

    }
};
});


// Voir pour les grades, deux fois les mêmes grades


// Nomenclature des var