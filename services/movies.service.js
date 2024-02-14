mvApp.factory('MoviesService', function () {
    let movies = [
        {
            id: 1,
            title: "title1",
            desc: "desc1",
            checked: false,
        },
        {
            id: 2,
            title: "title2",
            desc: "desc2",
            checked: false,
        }
    ]

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
        averageGrade: function(){
            let sum = 0;
            for(elem of grade){
                sum += elem;
            }
            return Math.round(sum / grade.length);
    }
    };
});