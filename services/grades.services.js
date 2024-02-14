mvApp.factory('GradesService', function($rootScope) {
    let grades = [
        {
            id:1,
            user: 1,
            movie: 1,
            grade: 4,
        },
        {
            id:2,
            movie: 1,
            user: 2,
            grade: 2,
        },
        {
            id:3,
            movie:1,
            user: 3,
            grade: 4,
        },
    ]

return {
    getGrades: function() {
        return grades;
    },
    getGradeByid: function(id){
        for(elem of grades){
            if(elem.id == id){
              return elem
            }
        }
    },
    addGrade: function(grade) {
        grades.push(grade);
    }
};
});