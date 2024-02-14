mvApp.factory('GradesService', function($rootScope, $routeParams, UsersService) {
    let grades = [
        {
            id:1,
            user_id: 1,
            movie_id: 1,
            grade: 5,
        },
        {
            id:2,
            movie_id: 2,
            user_id: 2,
            grade: 4,
        },
        {
            id:3,
            movie_id:2,
            user_id: 3,
            grade: 5,
        },
        {
            id:3,
            movie_id:2,
            user_id: 3,
            grade: 5,
        },
        {
            id:4,
            movie_id:3,
            user_id: 3,
            grade: 3,
        },
    ]
function getGradeByMovieAndUser(){


}
return {
    getGradeByMovieAndUser: function(){

        var id_movie = $routeParams.movieId;
        var id_user = parseInt(UsersService.getCurrentUserId());
        var grade;
        for(elem of grades){
            if(elem.movie_id === id_movie && elem.user_id === id_user){
                grade = elem.grade;

            }
        }
        return elem.grade;
    },
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
    addGrade: function(grade, pthis ) {
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
    getNumberOfgradeMovie: function(movieId){
        total = 0;
        grades.forEach(function(grade){
            if(grade.movie_id == movieId){
                console.log(movieId, "+1");
                total ++;
            }
        });
        return total
    },
    getNumberOfgrade: function(){
        return grades.length;
    },
    getGlobalAverageGrade: function(){
        total = 0;
        grades.forEach(function(grade){
            total += grade.grade
        });

        return total / grades.length;
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

