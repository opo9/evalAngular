mvApp.factory('MoviesService', function() {
        let movies = [
            {
                id:1,
                title: "cTitle1",
                desc: "desc1",
                checked: false,
                grade: [
                            {
                                star: 5
                            },
                            {
                                star: 4
                            },
                            {
                                star: 3
                            },
                        ],
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
                grade: [
                            {
                                star: 5
                            },
                            {
                                star: 4
                            },
                            {
                                star: 3
                            },
                        ],
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
                grade: [
                            {
                                star: 5
                            },
                            {
                                star: 4
                            },
                            {
                                star: 3
                            },
                        ],
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
        let grade = [4.5, 5, 6];
    
    return {
        getMovies: function() {
            return movies.sort((a, b) => a.title.localeCompare(b.title));
        },
        getMovieById: function(id){
            for(elem of movies){
                if(elem.id == id){
                  return elem
                }
            }
        },
        addMovie: function(movie) {
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