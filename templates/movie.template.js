var MovieTemplate =
    '<div class="container">' +
            '<div class="row">' +
                '<div class="col-md-6" ng-repeat="movie in $ctrl.movies">' +
                    '<h2>{{ movie.title }}</h2>' +
                    '<p>{{ movie.description }}</p>' +
                    '<p>Grade:' +
                        '<span ng-repeat="grade in movie.grade">{{ grade.star }}</span>' +
                    '</p>' +
                    '<p>Comments:' +
                        '<ul>' +
                            '<li ng-repeat="comment in movie.comments">{{ comment.user }}: {{ comment.data }}</li>' +
                        '</ul>' +
                    '</p>' +
                '</div>' +
            '</div>' +
        '</div>';

