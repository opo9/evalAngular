mvApp.factory('GradesService', function($rootScope, $routeParams, UsersService) {
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
    addGrade: function(grade ) {
        var id_movie = $routeParams.movieId;
        var id_user = parseInt(UsersService.getCurrentUserId());

        if(this.userAlreadyGrade(id_movie) === false){
            var gradeJSON = {
                id: grades.length + 1,
                user_id: id_user,
                movie_id: id_movie,
                grade: grade,
            }
            this.addGradeToMovie(gradeJSON);
            console.log(grades);
        }
        else{
            var gradeJSON = this.getGradeByid(id_movie);
            gradeJSON.grade = grade;
            console.log(grades);

        }


    },
    addGradeToMovie : function(grade){
        
        grades.push(grade);

    },
    userAlreadyGrade: function(id_movie){
        var id_user = parseInt(UsersService.getCurrentUserId());
        for(elem of grades){
            if(elem.movie_id == id_movie && elem.user_id == id_user){
                return true;
            }
        }
        return false;

    }
};
});


// Voir pour les grades, deux fois les mêmes grades


// Nomenclature des var